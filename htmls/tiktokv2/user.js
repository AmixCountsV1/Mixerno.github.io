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
    var stuff = new Highcharts.chart('container', {
      chart: {
        backgroundColor: 'transparent',
        renderTo: container,
        type: 'line'
      },
      title: {
        text: `Follower graph`,
        style: {
          color: '#FFFFFF',
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
            fans1.innerHTML = json.body.userData.fans
            if(json.content = "") {
              name1 = "rip."
            }
            name1.innerHTML = json.body.userData.nickName;
            d.innerHTML = json.body.userData.digg
            f.innerHTML = json.body.userData.following
            h.innerHTML = json.body.userData.heart
            v.innerHTML = json.body.userData.video
            $("#img1").attr('src', `${json.body.userData.covers}`);
            stuff.series[0].addPoint([
              (new Date()).getTime(),
              json.body.userData.fans
            ]);

            if (stuff.series[0].data.length >= 700) {
            stuff.series[0].data[0].remove()
          }
          }
        });
    }






    setInterval(usernamelol, 4000)






  });
