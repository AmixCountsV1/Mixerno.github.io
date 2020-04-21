setTimeout(function() {
    //location.reload();
  }, 7200000);
  var randomNumber = Math.floor(Math.random()*textArray.length);
  var stufflol = "";
  stufflol = textArray[randomNumber];
  var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
  var key = "https://nobnabob.herokuapp.com/";
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = key + options.url;
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
    var fans2 = "not using here sorry bois.";
    var chanelid = "no";

    usernamelol(params[1]);




    function usernamelol() {

        $.ajax({
  
          url: `https://mixer.com/api/v1/channels/${params[1]}/details`,
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            //$('#gahviplayerslol').html(json.body.userData.fans)
            fans1.innerHTML = json.numFollowers
            name1.innerHTML = json.token
            chanelid = json.userId
            
            $("#img1").attr('src', `https://mixer.com/api/v1/users/${chanelid}/avatar?w=64&h=64`);
            //gahviplayerslol.innerHTML = json.followers_count
            //gahviplay = json.followers_count
  
          }
        });
    }






    setInterval(function() {
      $.ajax({
  
        url: `https://mixer.com/api/v1/channels/${params[1]}/details`,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          fans1.innerHTML = json.numFollowers
          name1.innerHTML = json.token
          chanelid = json.userId
          
          $("#img1").attr('src', `https://mixer.com/api/v1/users/${chanelid}/avatar?w=64&h=64`);
          //gahviplayerslol.innerHTML = json.followers_count
          //gahviplay = json.followers_count

        }
      });
    
          





    }, 10000);






  });
