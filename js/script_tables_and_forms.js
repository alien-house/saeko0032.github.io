function FormClicked() {
  // window.alert("hello"); // never called
}

var FormClicked = function() {
  // window.alert("hello world"); // priority // closure has priority
  var email = document.getElementById("inEmail").value;
  var password = document.getElementById("inPassword").value; // "" string type
  if (password === "123456" && email === "saeko0032@gmail.com") {
  // if (password == 123456 && email ==="saeko0032@gmail.com") { // i don't like
    window.alert("login");
  } else {
    window.alert("failed");
  }
}
