$(document).ready(function() {

    function queryString() {
    var queryString = window.location.search;
    var varArray = queryString.split("&");
    for (var i = 0; i < varArray.length; i++) {
      var param = varArray[i].split("=");
      return param[1];
    }
  };

  
  if ($('body.contact').length > 0) {
    if (queryString() == "true") {
      $('#contact-message').html("<span><h3>Thank you. Your message has been sent. We will contact you shortly.</h3></span>");
    }
  };
  

});