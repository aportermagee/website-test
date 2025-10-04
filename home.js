if (!localStorage.getItem('loggedIn')) {
  window.location.href = 'index.html';
}

const logoutBtn = document.getItemById('logoutBtn');

logoutBtn.onclick = function() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'index.html';
  alert('hello');
}
