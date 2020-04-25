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
        text: `Follower graph`,
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
        name: 'Followers',
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
    var fans2 = "not using here sorry bois.";
    var chanelid = "no";
    if(params[2] = 1) {
      $('body').css('color', 'white');
      $('body').css('background-color', 'black');
      console.log("Black theme activated")
    }
    if(params[2] = 2) {
      $('body').css('color', 'black');
      $('body').css('background-color', 'white');
      console.log("White theme activated")
    }
    if(params[2] = 3) {
      $('body').css('color', 'white');
      $('body').css('background-color', 'transparent');
      console.log("transparent1 activated")
    }
    if(params[2] = 4) {
      $('body').css('color', 'black');
      $('body').css('background-color', 'transparent');
      console.log("transparent2 activated")
    }
    usernamelol(params[1]);




    function usernamelol() {
      url1 = 'https://mixernobest.herokuapp.com/tiktok/@' + params[1],
$.getJSON(url1, function(data) {
                    fans1.innerHTML = data.body.userData.fans
            if(data.content = "") {
              name1 = "rip."
            }
            name1.innerHTML = data.body.userData.nickName;
            d.innerHTML = data.body.userData.digg
            f.innerHTML = data.body.userData.following
            h.innerHTML = data.body.userData.heart
            v.innerHTML = data.body.userData.video
            $("#img1").attr('src', `${data.body.userData.covers}`);
            stuff.series[0].addPoint([
              (new Date()).getTime(),
              data.body.userData.fans
            ]);

            if (stuff.series[0].data.length >= 700) {
            stuff.series[0].data[0].remove()
          }
                    
                   
    
                });
        /*$.ajax({

          url: 'https://mixernobest.herokuapp.com/@' + params[1],
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            
          }
        });*/
    }






    setInterval(usernamelol, 4000)






  });
