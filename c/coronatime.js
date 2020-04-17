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
var key = "";
jQuery.ajaxPrefilter(function(options) {
if (options.crossDomain && jQuery.support.cors) {
//options.url = 'https://corseverywheremiks.herokuapp.com/' + options.url;
setInterval(function() {
var randomNumber = Math.floor(Math.random()*textArray.length);

key = textArray[randomNumber];
}, 1000);
//options.url = key + options.url;
}
});
$(document).ready(function() {
  var secwait = 20;
  var stuff = new Highcharts.chart('container', {
    chart: {
      backgroundColor: 'transparent',
      renderTo: container,
      type: 'line'
    },
    title: {
      text: 'Total Cases'
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
      name: 'Total Cases',
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
  loadstuff("No");
  function loadstuff() {
    console.log("yes")
      $.ajax({

        url: 'https://corona.lmao.ninja/v2/all',
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          tc.innerHTML = json.cases;
          ac.innerHTML = json.active;
          d.innerHTML = json.deaths;
          r.innerHTML = json.recovered;
          c.innerHTML = json.critical;
          afc.innerHTML = json.affectedCountries;
          ts.innerHTML = json.tests;
          secwait = 20;
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            json.cases
          ]);
          if (stuff.series[0].data.length >= 700) {
          stuff.series[0].data[0].remove()
        }
        }
      });
  };
  setInterval(function() {
    console.log("yes")
      $.ajax({

        url: 'https://corona.lmao.ninja/v2/all',
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          tc.innerHTML = json.cases;
          ac.innerHTML = json.active;
          d.innerHTML = json.deaths;
          r.innerHTML = json.recovered;
          c.innerHTML = json.critical;
          afc.innerHTML = json.affectedCountries;
          ts.innerHTML = json.tests;
          secwait = 20;
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            json.cases
          ]);
          if (stuff.series[0].data.length >= 700) {
          stuff.series[0].data[0].remove()
        }
        }
      });

  }, 20000);
  
  setInterval(function() {
    if(secwait > 0) {
      secwait = secwait - 1;
      updatemyboi.innerHTML = `${secwait + 1}`
    }
    else {
      updatemyboi.innerHTML = `${secwait + 1}`
    }
    

  }, 1000);
});
