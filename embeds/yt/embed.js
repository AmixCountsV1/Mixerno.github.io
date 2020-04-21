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
    var uc = "nouc";

    usernamelol(params[1]);




    function usernamelol() {

        $.ajax({
  
          url: `https://api.thesocialcounter.com/youtube/noUC/?name=` + params[1],
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            //$('#gahviplayerslol').html(json.body.userData.fans)
            uc = json.items[0].snippet.channelId
            //gahviplayerslol.innerHTML = json.followers_count
            //gahviplay = json.followers_count
            $.ajax({
  
              url: `https://api.thesocialcounter.com/youtube/UC/?name=` + uc,
              // Handle as Text
              dataType: "text",
              success: function(data) {
                // Parse JSON file
                var json = $.parseJSON(data);
                //Store data into a variable
                // Display Players
                //$('#gahviplayerslol').html(json.body.userData.fans)
                name1.innerHTML = json.items[0].snippet.title
                $("#img1").attr('src', `${json.items[0].snippet.thumbnails.high.url}`);
                //gahviplayerslol.innerHTML = json.followers_count
                //gahviplay = json.followers_count
                $.ajax({
  
                  url: `https://api.thesocialcounter.com/youtube/stats/?name=` + uc,
                  // Handle as Text
                  dataType: "text",
                  success: function(data) {
                    // Parse JSON file
                    var json = $.parseJSON(data);
                    //Store data into a variable
                    // Display Players
                    //$('#gahviplayerslol').html(json.body.userData.fans)
                    fans1.innerHTML = json.items[0].statistics.subscriberCount
                    //gahviplayerslol.innerHTML = json.followers_count
                    //gahviplay = json.followers_count
          
          
                  }
                });
      
              }
            });
  
          }
        });
    }






    setInterval(function() {
              $.ajax({

                url: `https://api.thesocialcounter.com/youtube/stats/?name=` + uc,
                // Handle as Text
                dataType: "text",
                success: function(data) {
                  // Parse JSON file
                  var json = $.parseJSON(data);
                  //Store data into a variable
                  // Display Players
                  //$('#gahviplayerslol').html(json.body.userData.fans)
                  fans1.innerHTML = json.items[0].statistics.subscriberCount
                  //gahviplayerslol.innerHTML = json.followers_count
                  //gahviplay = json.followers_count
        
        
                }
              });
    
          





    }, 5000);






  });
