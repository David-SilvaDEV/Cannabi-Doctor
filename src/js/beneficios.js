// Obtener y mostrar padecimientos desde el backend
document.addEventListener('DOMContentLoaded', () => {
	fetch('http://localhost:3001/api/padecimientos')
		.then(response => response.json())
		.then(data => {
			// Selecciona el contenedor donde se mostrarán los padecimientos
			const grid = document.querySelector('.grid');
			if (!grid) return;
			grid.innerHTML = '';
			data.forEach(padecimiento => {
				const card = document.createElement('article');
				card.className = 'card';
				card.innerHTML = `
					<div class="icon-badge">🩺</div>
					<h3>${padecimiento.nombre}</h3>
					<p>${padecimiento.descripcion}</p>
					<div class="benefit"><b>Beneficios del cannabis:</b> ${padecimiento.beneficio}</div>
				`;
				grid.appendChild(card);
			});
		})
		.catch(error => {
			console.error('Error al obtener padecimientos:', error);
		});
});
