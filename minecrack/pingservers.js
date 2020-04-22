var randomNumber = Math.floor(Math.random()*textArray.length);
var stufflol = "";
stufflol = textArray[randomNumber];
var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
var key = "";
jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
    setInterval(function() {
      var randomNumber = Math.floor(Math.random()*textArray.length);

      key = textArray[randomNumber];
    }, 100);
    //options.url = key + options.url;
  }
});
$(document).ready(function() {
 ping(servers);
 var grappjs0 = new Highcharts.chart('fuckinggraph0', {
    chart: {
      backgroundColor: 'transparent',
      renderTo: $('#fuckinggraph0'),
      type: 'spline'
    },
    title: {
      text: ''
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
      name: `${servers[0]}'s players`,
      marker: {
        enabled: true
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
  var grappjs1 = new Highcharts.chart('fuckinggraph1', {
    chart: {
      backgroundColor: 'transparent',
      renderTo: $('#fuckinggraph1'),
      type: 'spline'
    },
    title: {
      text: ''
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
      name: `${servers[1]}'s players`,
      marker: {
        enabled: true
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


    function ping() {
        $.ajax({
            url: 'https://mcapi.xdefcon.com/server/' + servers[0] + '/full/json',
            // Handle as Text
            dataType: "text",
            success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            n0.innerHTML = servernames[0]
            pc0.innerHTML = json.players
            $("#i0").attr('src', `${json.icon}`);
                grappjs0.series[0].addPoint([
                (new Date()).getTime(),
                json.players
              ]);
              if (grappjs0.series[0].data.length >= 10) {
                grappjs0.series[0].data[0].remove()
                }
            
            
            }
            });
            $.ajax({
                url: 'https://mcapi.xdefcon.com/server/' + servers[1] + '/full/json',
                // Handle as Text
                dataType: "text",
                success: function(data) {
                // Parse JSON file
                var json = $.parseJSON(data);
                //Store data into a variable
                // Display Players
                n1.innerHTML = servernames[1]
                pc1.innerHTML = json.players
                $("#i1").attr('src', `${json.icon}`);
                    grappjs1.series[0].addPoint([
                    (new Date()).getTime(),
                    json.players
                  ]);
                  if (grappjs1.series[0].data.length >= 10) {
                    grappjs1.series[0].data[0].remove()
                    }
                
                }
                });
    };
    setInterval(ping, 3000)

});