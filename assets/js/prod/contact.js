function queryString(){for(var o=window.location.search.split("&"),t=0;t<o.length;t++)return o[t].split("=")[1]}$("body").hasClass("contact")&&("true"==queryString()?($("#contact-message").show(),console.log("show")):($("#contact-message").hide(),console.log("hide")));