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
    /*setInterval(function() {
      var randomNumber = Math.floor(Math.random()*textArray.length);

      key = textArray[randomNumber];
    }, 1000);*/
  }
});
$(document).ready(function() {

    $('#whitee').click(function() {
        $('body').css('color', 'black');
        $('body').css('background-color', 'white');
        console.log("White theme activated")
      });
      $('#blackk').click(function() {
        $('body').css('color', 'white');
        $('body').css('background-color', 'black');
        console.log("Black theme activated")
      });
      $('#transparent1').click(function() {
        $('body').css('color', 'white');
        $('body').css('background-color', 'transparent');
        console.log("transparent1 activated")
      });
      $('#transparent2').click(function() {
        $('body').css('color', 'black');
        $('body').css('background-color', 'transparent');
        console.log("transparent2 activated")
      });

  var parms = window.location.href;
  var params = parms.split('?');
  var stats1 = 0;
  var stats2 = 0;
  var seconds1 = 0;
  var seconds2 = 0;
  var minutes1 = 0;
  var minutes2 = 0;
  var hours1 = 0;
  var hours2 = 0;
  var days1 = 0;
  var days2 = 0;
var minst1 = 0;
var minst2 = 0;
var hourst1 = 0;
var hourst2 = 0;
var dayst1 = 0;
var dayst2 = 0;

  usernamelol(params[1]);




  function usernamelol() {

      $.ajax({

        url: 'https://www.tiktok.com/node/share/user/@' + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          stats1 = json.body.userData.fans
          name1.innerHTML = json.body.userData.nickName;
          minst1 = stats1
          hourst1 = stats1
          dayst1 = stats1
          fols1.innerHTML = stats1
          $.ajax({

            url: 'https://www.tiktok.com/node/share/user/@' + params[2],
            // Handle as Text
            dataType: "text",
            success: function(data) {
              // Parse JSON file
              var json = $.parseJSON(data);
              //Store data into a variable
              // Display Players
              stats2 = json.body.userData.fans
              name2.innerHTML = json.body.userData.nickName;
              minst2 = stats2
              hourst2 = stats2
          dayst2 = stats2
          fols2.innerHTML = stats2
            }
          });
        }
      });
      
  }






  setInterval(function() {
      $.ajax({

        url: 'https://www.tiktok.com/node/share/user/@' + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          stats1 = json.body.userData.fans
          name1.innerHTML = json.body.userData.nickName;
          fols1.innerHTML = stats1
          $.ajax({

            url: 'https://www.tiktok.com/node/share/user/@' + params[2],
            // Handle as Text
            dataType: "text",
            success: function(data) {
              // Parse JSON file
              var json = $.parseJSON(data);
              //Store data into a variable
              // Display Players
              stats2 = json.body.userData.fans
              name2.innerHTML = json.body.userData.nickName;
              fols2.innerHTML = stats2
            }
          });
        }
      });
      
  }, 10000)
  setInterval(function() {
    seconds1 = seconds1 + 1000
    if (seconds1 > 60000) {
      seconds1 = 0
      
      min1.innerHTML = stats1 - minst1;
      minst1 = stats1
    }
    console.log(seconds1 + ' /60000')
  }, 1000);
  setInterval(function() {
    seconds2 = seconds2 + 1000
    if (seconds2 > 60000) {
      seconds2 = 0
      
      min2.innerHTML = stats2 - minst2;
      minst2 = stats2
    }
    console.log(seconds2 + ' /60000')
  }, 1000);
  setInterval(function() {
    hours1 = hours1 + 1000
    if (hours1 > 3600000) {
      hours1 = 0
      hour1.innerHTML = stats1 - hourst1;
      hourst1 = stats1
      
      
    }
    console.log(hours1 + ' /3600000')
  }, 1000);
  setInterval(function() {
    hours2 = hours2 + 1000
    if (hours2 > 3600000) {
      hours2 = 0
      hour2.innerHTML = stats2 - hourst2;
      hourst2 = stats2
      
      
    }
    console.log(hours2 + ' /3600000')
  }, 1000);
  setInterval(function() {
    days1 = days1 + 1000
    if (days1 > 86400000) {
      days1 = 0
      day1.innerHTML = stats1 - dayst1;
      dayst1 = stats1
      
      
    }
    console.log(days1 + ' /86400000')
  }, 1000);
  setInterval(function() {
    days2 = days2 + 1000
    if (days2 > 86400000) {
      days2 = 0
      day2.innerHTML = stats2 - dayst2;
      dayst2 = stats2
      
      
    }
    console.log(days2 + ' /86400000')
  }, 1000);





});