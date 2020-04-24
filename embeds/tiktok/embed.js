setTimeout(function() {
    //location.reload();
  }, 7200000);
  var randomNumber = Math.floor(Math.random()*textArray.length);
  var stufflol = "";
  stufflol = textArray[randomNumber];
  var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
  var key = "https://nugisextremelynice.herokuapp.com/";
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = key + options.url;
      setInterval(function() {
        var randomNumber = Math.floor(Math.random()*textArray.length);

        key = textArray[randomNumber];
      }, 1000);
    }
  });
  $(document).ready(function() {


    var parms = window.location.href;
    var params = parms.split('?');
    var fans2 = "0";


    usernamelol(params[1]);




    function usernamelol() {



      $.ajax({

        url: 'https://mixernobest.herokuapp.com/@' + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          fans2 = json.body.userData.fans
          fans1.innerHTML = json.body.userData.fans;
          name1.innerHTML = json.body.userData.nickName;
          $("#img1").attr('src', `${json.body.userData.covers}`);
        }
      });
    }






    setInterval(function() {
      $.ajax({

        url: 'https://mixernobest.herokuapp.com/@' + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          fans2 = json.body.userData.fans
          fans1.innerHTML = json.body.userData.fans;
          name1.innerHTML = json.body.userData.nickName;
          $("#img1").attr('src', `${json.body.userData.covers}`);
        }
      });







    }, 2000);






  });
