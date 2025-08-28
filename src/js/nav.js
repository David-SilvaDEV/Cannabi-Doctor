document.querySelector('.button_slide').addEventListener('click', function() {
  document.getElementById('modal-login').style.display = 'block';
});
document.getElementById('close-login').onclick = function() {
  document.getElementById('modal-login').style.display = 'none';
};
window.onclick = function(event) {
  var modal = document.getElementById('modal-login');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};