if (localStorage.getItem('loggedIn')) {
  window.location.href = 'home.html';
}

const users = {
  'amagee': 'apm2010!',
}

const submitBtn = document.getElementById('submitBtn');

function tryLogin(username, password) {
  if (users[username] === password) {
    localStorage.setItem('loggedIn', true);
    window.location.href = 'home.html';
  } else {
    document.getItemById("errorMessage").textContent = 'Incorrect username or password';
  }
}

submitBtn.onclick = function() {
  tryLogin(document.getElementById('username').value, document.getElementById('password').value);
}
