// document.addEventListener("DOMContentLoaded", function() {
//   // everytime called first
// });
//
// $(document).ready(function() {
//   // above -> below
//    window.alert("hello1");
// });

$(function(){
   $("#btnLogin").click(function(){
     // more secure
     var email = $("#inEmail").val();
     var password = $("#inPassword").val(); // "" string type
     var resultSpan = $("#resultSpan");
      resultSpan.removeClass();
     if (password === "123456" && email === "saeko0032@gmail.com") {
       resultSpan.addClass("bg-success").html("you are succeed");
     } else {
       resultSpan.addClass("bg-info").html("go away");
     }
   });
});
