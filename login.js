const users = {
  "amagee": "apm2010!";
}

const submitBtn = document.getElementById("submitBtn");

function check(username, password) {
  if (users[username] === password) {
    alert("Logged In");
  } else {
    alert("Incorrect username or password");
  }
}

submitBtn.onclick(check(document.getElementById("username").value, document.getElementById("password").value);
