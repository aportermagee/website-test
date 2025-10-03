const users = {
  "amagee": "apm2010!";
}

const submitBtn = document.getElementById("submitBtn");

function check(username, password) {
  if (users.username === password) {
    alert("Logged In");
  } else {
    alert("Incorrect password");
  }
}

submitBtn.onclick(check(document.getElementById("username").value, document.getElementById("password").value);
