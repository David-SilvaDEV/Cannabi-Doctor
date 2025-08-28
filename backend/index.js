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
  user: 'uwbfma1thbyigqsr tu usuario',
  password: 'uDKWQTiowUjKbiQkiWw8',
  database: 'bxvgwk6qicumaj69boht'
});
db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

app.use(cors());
app.use(bodyParser.json());

// --- ENDPOINTS ---

// Registrar usuario con contraseña hasheada
app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }
  // Verificar si el email ya existe
  db.query('SELECT id FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0) {
      return res.status(409).json({ error: 'El correo ya está registrado' });
    }
    try {
      const hash = await bcrypt.hash(password, 10);
      db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hash], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Usuario registrado', id: result.insertId });
      });
    } catch (err) {
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
    res.json({ message: 'Login exitoso', user: { id: user.id, name: user.name, email: user.email } });
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

