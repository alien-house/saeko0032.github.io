var btnLoginClicked = function() {
  var email = document.getElementById("inEmail").value;
  var password = document.getElementById("inPassword").value;
  var resultEl = document.getElementById("resultSpan");
  if (email === "saeko0032@gmail.com" && password === "123456") {
    resultEl.innerHTML = "The user has logged in.";
    resultEl.className = "bg-success";
  } else {
    resultEl.innerHTML = "Incorrect email/pw.";
    resultEl.className = "bg-danger";
  }
}
