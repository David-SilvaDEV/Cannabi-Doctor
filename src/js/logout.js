// Script para mostrar/ocultar botón de sesión y cerrar sesión
window.addEventListener('DOMContentLoaded', () => {
  const btnLogin = document.getElementById('btn-login');
  const btnLogout = document.getElementById('btn-logout');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    btnLogin.style.display = 'none';
    btnLogout.style.display = 'inline-block';
  } else {
    btnLogin.style.display = 'inline-block';
    btnLogout.style.display = 'none';
  }

  btnLogout.addEventListener('click', () => {
  localStorage.removeItem('user');
  localStorage.removeItem('id_user');
  localStorage.removeItem('username');
  localStorage.setItem('isLoggedIn', 'false');
  btnLogout.style.display = 'none';
  btnLogin.style.display = 'inline-block';
  // No redirigir, solo actualizar botones
  });
});
