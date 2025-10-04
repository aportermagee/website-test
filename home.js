if (!(localStorage.getItem('loggedIn') === null)) {
  window.location.href = 'index.html';
}

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.onclick = function() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'index.html';
}
