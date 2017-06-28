function queryString() {
  var queryString = window.location.search;
  var varArray = queryString.split("&");
  for (var i = 0; i < varArray.length; i++) {
    var param = varArray[i].split("=");
    return param[1];
  }
};

if ($('body').hasClass("contact")) {
  if (queryString() == "true") {
    $('#contact-message').show();
    console.log("show");
  } else {
    $('#contact-message').hide();
    console.log("hide");
  }
};