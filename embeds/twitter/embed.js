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
  var key = "https://nobnabob.herokuapp.com/";
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = '' + options.url;
      setInterval(function() {
        var randomNumber = Math.floor(Math.random()*textArray.length);

        key = textArray[randomNumber];
      }, 1000);
      options.url = '' + options.url;
    }
  });
  $(document).ready(function() {


    var parms = window.location.href;
    var params = parms.split('?');
    var fans2 = "0";


    usernamelol(params[1]);




    function usernamelol() {

        $.ajax({

          url: 'https://bastet.socialblade.com/twitter/lookup?query=' + params[1],
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            //$('#gahviplayerslol').html(json.body.userData.fans)
            fans1.innerHTML = json
            fans2 = json
  
  
          }
        });
        $.ajax({
  
          url: `${key}https://api.thesocialcounter.com/twitter/?name=` + params[1],
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            //$('#gahviplayerslol').html(json.body.userData.fans)
            name1.innerHTML = json.name
            $("#img1").attr('src', `${json.profile_image_url}`);
            //gahviplayerslol.innerHTML = json.followers_count
            //gahviplay = json.followers_count
  
  
          }
        });
    }






    setInterval(function() {
      $.ajax({

        url: 'https://bastet.socialblade.com/twitter/lookup?query=' + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          fans1.innerHTML = json
          fans2 = json


        }
      });
      $.ajax({

        url: `${key}https://api.thesocialcounter.com/twitter/?name=` + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          name1.innerHTML = json.name
          $("#img1").attr('src', `${json.profile_image_url}`);
          //gahviplayerslol.innerHTML = json.followers_count
          //gahviplay = json.followers_count


        }
      });






    }, 2000);






  });
