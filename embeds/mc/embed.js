setTimeout(function() {
    //location.reload();
  }, 7200000);
  var textArray = [ //All the cors anywhere urls.
                'https://corseverywheremiks.herokuapp.com/',
                'https://mixernocors.herokuapp.com/',
                'https://mixernob.herokuapp.com/',
                'https://nobnabob.herokuapp.com/',
                ];
  var randomNumber = Math.floor(Math.random()*textArray.length);
  var stufflol = "";
  stufflol = textArray[randomNumber];
  var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
  var key = "";
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://corseverywheremiks.herokuapp.com/' + options.url;
      setInterval(function() {
        var randomNumber = Math.floor(Math.random()*textArray.length);

        key = textArray[randomNumber];
      }, 1000);
      options.url = key + options.url;
    }
  });
  $(document).ready(function() {


    var parms = window.location.href;
    var params = parms.split('?');
    var fans2 = "0";


    usernamelol(params[1]);




    function usernamelol() {

      $.ajax({
        url: 'https://mcapi.xdefcon.com/server/' + params[1] + '/full/json',
        // Handle as Text
        dataType: "text",
        success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name1.innerHTML = params[1];
        fans1.innerHTML = json.players
        fans2 = json.players
        $("#img1").attr('src', `${json.icon}`);
        
        
        }
        });
    }






    setInterval(function() {
      $.ajax({
        url: 'https://mcapi.xdefcon.com/server/' + params[1] + '/full/json',
        // Handle as Text
        dataType: "text",
        success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name1.innerHTML = params[1];
        fans1.innerHTML = json.players
        fans2 = json.players
        $("#img1").attr('src', `${json.icon}`);
        
        
        }
        });







    }, 2000);






  });
