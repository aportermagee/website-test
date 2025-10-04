if (!localStorage.getItem('loggedIn')) {
  window.location.href = 'index.html';
}

const logoutBtn = document.getItemById('logoutBtn');

logoutBtn.onclick = function() {
  localStorage.removeItem('loggedIn');
  alert('hello');
  window.location.href = 'index.html';
}
