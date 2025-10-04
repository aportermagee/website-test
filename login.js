if (localStorage.getItem('loggedIn') === true) {
  window.location.href = 'home.html';
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function(event) {
  if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J'))) {
    event.preventDefault();
  }
});

const users = {
  'amagee': 'apm2010!',
}

const submitBtn = document.getElementById('submitBtn');

function tryLogin(username, password) {
  if (users[username] === password) {
    localStorage.setItem('loggedIn', true);
    window.location.href = 'home.html';
  } else {
    document.getElementById("errorMessage").textContent = 'Incorrect username or password';
  }
}

submitBtn.onclick = function() {
  tryLogin(document.getElementById('username').value, document.getElementById('password').value);
}
