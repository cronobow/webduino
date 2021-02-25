+(function (window, document) {

  'use strict';

  function send_request(request_type_,input_url_)
  {
    $.ajax({
        "type": request_type_,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          text: 'text'
        },
        "url": input_url_,
        success: function(jsonp)
        {
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          //console.log(errorThrown);
        }
       });
  }

  window.send_request = send_request;

}(window, window.document));
