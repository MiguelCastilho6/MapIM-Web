document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchValue = document.getElementById('sala1').value;
  window.location.href = 'path.html?search=${sala1}';
});