setTimeout(function() {
    //location.reload();
  }, 7200000);
  
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
          url: `https://games.roblox.com/v1/games?universeIds=${params[1]}`,
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            name1.innerHTML = json.data[0].name 
            fans1.innerHTML = json.data[0].playing
            fans2 = json.data[0].playing
              $.ajax({
          url: `https://thumbnails.roblox.com/v1/games/icons?universeIds=${params[1]}&returnPolicy=PlaceHolder&size=50x50&format=Png&isCircular=false`,
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            $("#img1").attr('src', json.data[0].imageUrl);
          }
        });  
          }
        });
    }






    setInterval(function() {
      $.ajax({
        url: `https://games.roblox.com/v1/games?universeIds=${params[1]}`,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          name1.innerHTML = json.data[0].name 
          fans1.innerHTML = json.data[0].playing
          fans2 = json.data[0].playing
            $.ajax({
        url: `https://thumbnails.roblox.com/v1/games/icons?universeIds=${params[1]}&returnPolicy=PlaceHolder&size=50x50&format=Png&isCircular=false`,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          $("#img1").attr('src', json.data[0].imageUrl);
        }
      });  
        }
      });







    }, 5000);






  });
