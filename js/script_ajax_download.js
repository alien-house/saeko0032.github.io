$(function() {
  $.ajax({
    method: 'GET',
    url: "http://api.ideiadoluiz.com.br/gyukaku/public/generalData",
    success: function(response){
      // alert("success");
      // for var prop in response.roles) {
      //   console.log(prop.id +""+ prop.role);
      // }
      // $(response).each(function( index ) {
      //   console.log( index + ": " + $( this ).text() );
      // });

      for (var i=0; i<response.roles.length; i++) {
        $("#tableLocationBody").append(
          "<tr><td>" + i + "</td><td>" + response.roles[i].role +"</td>" + "tr")
      }
    },
    error: function(err){
      alert("error" + err);
    }
  });
});
