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
    //options.url = key + options.url;
    setInterval(function() {
      var randomNumber = Math.floor(Math.random()*textArray.length);

      key = textArray[randomNumber];
    }, 1000);
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
  var stuff = new Highcharts.chart('container', {
    chart: {
      backgroundColor: 'transparent',
      renderTo: container,
      type: 'spline'
    },
    title: {
      text: `Follower diffrence graph`,
      style: {
        color: '#1E90FF',
        fontWeight: 'bold'
      }

    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 500
    },
    yAxis: {
      title: {
        text: ''
      }
    },

    credits: {
      enabled: false
    },

    series: [{
      name: 'Follower diffrence',
      marker: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      labels: {
        enabled: false
      },
      exporting: {
        enabled: false
      },

    }]
  })

  var parms = window.location.href;
  var params = parms.split('?');
  var stats1 = 0;
  var stats2 = 0;
  var s1s2 = 0;

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
          stats1 = json.body.userData.fans
          fans1.innerHTML = json.body.userData.fans;
          name1.innerHTML = json.body.userData.nickName;
          $("#img1").attr('src', `${json.body.userData.covers}`);
          $.ajax({

            url: 'https://mixernobest.herokuapp.com/@' + params[2],
            // Handle as Text
            dataType: "text",
            success: function(data) {
              // Parse JSON file
              var json = $.parseJSON(data);
              //Store data into a variable
              // Display Players
              stats2 = json.body.userData.fans
              fans2.innerHTML = json.body.userData.fans;
              name2.innerHTML = json.body.userData.nickName;
              $("#img2").attr('src', `${json.body.userData.covers}`);
              comp.innerHTML = stats1 - stats2;
              stuff.series[0].addPoint([
                (new Date()).getTime(),
                stats1 - stats2
              ]);
              if (stuff.series[0].data.length >= 700) {
              stuff.series[0].data[0].remove()
            }
            }
          });
        }
      });
      
  }






  setInterval(usernamelol, 5000)





});