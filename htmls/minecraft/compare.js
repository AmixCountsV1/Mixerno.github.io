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
        type: 'spline'
      },
      title: {
        text: `Player diffrence graph`,
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
        name: 'Player diffrence',
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
    var chanelid = "no";
    var s1 = 0;
    var s2 = 0;

    usernamelol(params[1]);




    function usernamelol() {
      $.ajax({
        url: 'https://mcapi.xdefcon.com/server/' + params[1] + '/full/json',
        // Handle as Text
        dataType: "text",
        success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name1.innerHTML = params[1];
        fans1.innerHTML = json.players
        $("#img1").attr('src', `${json.icon}`);
        s1 = json.players
        $.ajax({
          url: 'https://mcapi.xdefcon.com/server/' + params[2] + '/full/json',
          // Handle as Text
          dataType: "text",
          success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          name2.innerHTML = params[2];
          fans2.innerHTML = json.players
          $("#img2").attr('src', `${json.icon}`);
          s2 = json.players
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            s1 - s2
          ]);
          if (stuff.series[0].data.length >= 700) {
          stuff.series[0].data[0].remove()
        }
          }
          });
        }
        });
    }






    setInterval(usernamelol, 5000);






  });
