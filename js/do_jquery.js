$(function(){
  $("#div1").click(function(){
    // window.setInterval(function(){
    $("#div2").slideToggle();
    // }, 1000);
    $("#div2").click(function(){
      $("#div2 span").css("color","#ff0000");
      $("#div2 span").animate(
        {top: "80%", left: "85%"
        },
        5000,
        function(){
          $(this).css({top: "10px", left : "0px"});
        });
    });
  });
});
