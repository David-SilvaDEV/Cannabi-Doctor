import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';

const app = express();
const PORT = 3001;

// Configuración de conexión MySQL
const db = mysql.createConnection({
  host: 'bxvgwk6qicumaj69boht-mysql.services.clever-cloud.com',
  user: 'uwbfma1thbyigqsr',
  password: 'uDKWQTiowUjKbiQkiWw8',
  database: 'bxvgwk6qicumaj69boht'
});
db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

app.use(cors({
  origin: [
    'http://127.0.0.1:5500',
    'http://127.0.0.1:5501',
    'http://localhost:5500',
    'http://localhost:5501'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(bodyParser.json());

// --- ENDPOINTS ---
// Guardar comentario
app.post('/api/comments', (req, res) => {
  const { id_user, comentario } = req.body;
  if (!id_user || !comentario) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }
  db.query('INSERT INTO comments (id_user, comentario) VALUES (?, ?)', [id_user, comentario], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Comentario guardado', id: result.insertId });
  });
});

// Listar comentarios
app.get('/api/comments', (req, res) => {
  db.query('SELECT comments.*, users.name_user, users.lastname_user FROM comments JOIN users ON comments.id_user = users.id_user', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Registrar usuario con contraseña hasheada
app.post('/api/users', async (req, res) => {
  const { name_user, lastname_user, email, password } = req.body;
  console.log('Petición recibida en /api/users:', req.body);
  if (!name_user || !lastname_user || !email || !password) {
    console.log('Datos faltantes');
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }
  db.query('SELECT id_user FROM users WHERE email = ?', [email], async (err, results) => {
    console.log('Resultado SELECT:', err, results);
    if (err) {
      console.log('Error en SELECT:', err);
      return res.status(500).json({ error: err.message });
    }
    if (results.length > 0) {
      console.log('Correo ya registrado');
      return res.status(409).json({ error: 'El correo ya está registrado' });
    }
    try {
      const hash = await bcrypt.hash(password, 10);
      console.log('Hash generado:', hash);
      db.query('INSERT INTO users (name_user, lastname_user, email, password) VALUES (?, ?, ?, ?)', [name_user, lastname_user, email, hash], (err, result) => {
        console.log('Resultado INSERT:', err, result);
        if (err) {
          console.log('Error en INSERT:', err);
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Usuario registrado', id_user: result.insertId });
      });
    } catch (err) {
      console.log('Error al hashear la contraseña:', err);
      res.status(500).json({ error: 'Error al hashear la contraseña' });
    }
  });
});

// Login de usuario
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(401).json({ error: 'Usuario no encontrado' });
    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Contraseña incorrecta' });
    res.json({ message: 'Login exitoso', user: { id_user: user.id_user, name_user: user.name_user, email: user.email } });
  });
});

// Listar padecimientos
app.get('/api/padecimientos', (req, res) => {
  db.query('SELECT * FROM padecimientos', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
// Listar preguntas
app.get('/api/preguntas', (req, res) => {
  db.query('SELECT * FROM preguntas', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
// Guardar pregunta
app.post('/api/preguntas', (req, res) => {
  const { user_id, topic, pregunta } = req.body;
  db.query('INSERT INTO preguntas (user_id, topic, pregunta) VALUES (?, ?, ?)', [user_id, topic, pregunta], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Pregunta guardada', id: result.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
}); 

