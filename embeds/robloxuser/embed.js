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
          url: 'https://api.roblox.com/users/' + params[1],
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            name1.innerHTML = json.Username
            $.ajax({
          url: 'https://friends.roblox.com/v1/users/' + params[1] + '/followers/count',
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            fans1.innerHTML = json.count
            fans2 = json.count
          }
        });
    
          }
        });
        $.ajax({
            url: `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${params[1]}&size=150x150&format=Png&isCircular=false`,
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






    setInterval(function() {
      $.ajax({
        url: 'https://api.roblox.com/users/' + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          name1.innerHTML = json.Username
          $.ajax({
        url: 'https://friends.roblox.com/v1/users/' + params[1] + '/followers/count',
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          fans1.innerHTML = json.count
          fans2 = json.count
        }
      });
  
        }
      });
      $.ajax({
          url: `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${params[1]}&size=150x150&format=Png&isCircular=false`,
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







    }, 2000);






  });
