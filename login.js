const users = {
  'amagee': 'apm2010!',
}

const submitBtn = document.getElementById('submitBtn');

function tryLogin(username, password) {
  if (users[username] === password) {
    localStorage.setItem('loggedIn', true);
  } else {
    alert('Incorrect username or password');
  }
}

submitBtn.onclick = function() {
  check(document.getElementById('username').value, document.getElementById('password').value);
}
