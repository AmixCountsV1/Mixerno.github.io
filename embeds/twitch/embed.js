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
    var fans2 = "0";
    var twitchid = "0";


    usernamelol(params[1]);




    function usernamelol() {
        $.ajax({
  
          url: `https://api.thesocialcounter.com/twitchdata?name=` + params[1],
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            //$('#gahviplayerslol').html(json.body.userData.fans)
            twitchid = json.data[0].id
            name1.innerHTML = json.data[0].display_name
            $("#img1").attr('src', `${json.data[0].profile_image_url}`);
            //gahviplayerslol.innerHTML = json.followers_count
            //gahviplay = json.followers_count
            $.ajax({
  
              url: `https://api.thesocialcounter.com/twitch/?name=` + twitchid,
              // Handle as Text
              dataType: "text",
              success: function(data) {
                // Parse JSON file
                var json = $.parseJSON(data);
                //Store data into a variable
                // Display Players
                //$('#gahviplayerslol').html(json.body.userData.fans)
                fans1.innerHTML = json.total
                fans2 = json.total
                //gahviplayerslol.innerHTML = json.followers_count
                //gahviplay = json.followers_count
      
      
              }
            });
  
          }
        });
    }






    setInterval(function() {
      $.ajax({
  
        url: `https://api.thesocialcounter.com/twitch/?name=` + twitchid,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          fans1.innerHTML = json.total
          fans2 = json.total
          //gahviplayerslol.innerHTML = json.followers_count
          //gahviplay = json.followers_count


        }
      });






    }, 4000);






  });
