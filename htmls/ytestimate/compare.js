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


  var count1 = 0;
  var count2 = 0;
  function usernamelol() {
    url1 = 'https://mixernobest.herokuapp.com/ytestimate/@' + params[1],
    url2 = 'https://mixernobest.herokuapp.com/ytestimate/@' + params[2],
$.getJSON(url1, function(data) {
                  fans1.innerHTML = Math.floor(data.count)
                  name1.innerHTML = data.name;
                  count1 = Math.floor(data.count)
                  $("#img1").attr('src', `${data.avatarurl}`);
              });
              $.getJSON(url2, function(data) {
                fans2.innerHTML = Math.floor(data.count)
                name2.innerHTML = data.name;
                count2 = Math.floor(data.count)
                $("#img2").attr('src', `${data.avatarurl}`);
               });
            stuff.series[0].addPoint([
              (new Date()).getTime(),
              count1 - count2
            ]);
  
            if (stuff.series[0].data.length >= 700) {
            stuff.series[0].data[0].remove()
          }
  }






  setInterval(usernamelol, 4000)





});