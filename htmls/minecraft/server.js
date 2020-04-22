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
        text: `Players graph`,
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
        name: 'Players',
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
        p.innerHTML = json.ping
        mp.innerHTML = json.maxplayers
        pr.innerHTML = json.protocol
        sip.innerHTML = json.serverip
        ss.innerHTML = json.serverStatus
        stuff.series[0].addPoint([
          (new Date()).getTime(),
          json.players
        ]);
        if (stuff.series[0].data.length >= 700) {
        stuff.series[0].data[0].remove()
      }
        $("#img1").attr('src', `${json.icon}`);
        
        
        }
        });
    }






    setInterval(usernamelol, 5000);






  });
