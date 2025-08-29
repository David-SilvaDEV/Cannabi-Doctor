// Mostrar preguntas desde el backend
document.addEventListener('DOMContentLoaded', () => {
	fetch('http://localhost:3001/api/preguntas')
		.then(response => response.json())
		.then(data => {
			const container = document.querySelector('.questions-container');
			if (!container) return;
			container.innerHTML = '';
			data.forEach((pregunta, i) => {
				const details = document.createElement('details');
				details.className = 'questions-item';
				details.innerHTML = `
					<summary>${i + 1}. ${pregunta.pregunta}</summary>
					<p><b>Tema:</b> ${pregunta.topic || 'Sin tema'}<br>${pregunta.respuesta || 'Sin respuesta aún.'}</p>
				`;
				container.appendChild(details);
			});
		})
		.catch(error => {
			console.error('Error al obtener preguntas:', error);
		});

	// Enviar nueva pregunta
	const form = document.querySelector('form');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			const name = document.getElementById('name').value;
			const email = document.getElementById('email').value;
			const topic = document.getElementById('topic').value;
			const pregunta = document.getElementById('question').value;
			// Aquí podrías obtener el user_id si tienes login
			const payload = { user_id: 1, topic, pregunta };
			fetch('http://localhost:3001/api/preguntas', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			})
			.then(res => res.json())
			.then(data => {
				alert('Pregunta enviada correctamente');
				form.reset();
			})
			.catch(error => {
				alert('Error al enviar pregunta');
				console.error(error);
			});
		});
	}
});
