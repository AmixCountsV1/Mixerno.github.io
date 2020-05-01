setTimeout(function() {
  //location.reload();
}, 7200000);
var randomNumber = Math.floor(Math.random()*textArray.length);
var stufflol = "";
stufflol = textArray[randomNumber];
var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
var key = "";
  key = textArray[randomNumber]
jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
    options.url = '' + options.url;
    setInterval(function() {
      /*var randomNumber = Math.floor(Math.random()*textArray.length);

      key = textArray[randomNumber];*/
    }, 1000);
  }
});
var parms = window.location.href;
  var params = parms.split('?');
$(document).ready(function() {
  
  
  $('#whitee').click(function() {
    $('.odometer odometer-auto-theme.odometer-animating-up').css('color', 'black');
    $('.odometer odometer-auto-theme.odometer-animating-down.odometer-animating').css('color', 'black');
    $('body').css('color', 'black');
    $('body').css('background-color', 'white');
    console.log("White theme activated");
    location.href = `${params[0]}?${params[1]}?${params[2]}?1?${params[4]}?${params[5]}`;
  });
  $('#blackk').click(function() {
    $('.odometer odometer-auto-theme.odometer-animating-up').css('color', 'white');
    $('.odometer odometer-auto-theme.odometer-animating-down.odometer-animating').css('color', 'white');
    $('body').css('color', 'white');
    $('body').css('background-color', 'black');
    console.log("Black theme activated");
    location.href = `${params[0]}?${params[1]}?${params[2]}?2?${params[4]}?${params[5]}`;
  });
  /*$('#blackkodometercolors').click(function() {
    $('.odometer.odometer-auto-theme.odometer-animating-up').css('color', 'green');
    $('.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating').css('color', 'red');
    $('body').css('color', 'white');
    $('body').css('background-color', 'black');
    console.log("Black theme activated");
    location.href = `${params[0]}?${params[1]}?${params[2]}?6?${params[4]}?${params[5]}`;
  });
  $('#whiteeodometercolors').click(function() {
    $('.odometer.odometer-auto-theme.odometer-animating-up').css('color', 'green');
    $('.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating').css('color', 'red');
    $('body').css('color', 'black');
    $('body').css('background-color', 'white');
    console.log("White theme activated");
    location.href = `${params[0]}?${params[1]}?${params[2]}?5?${params[4]}?${params[5]}`;
  });*/
  
  $('#transparent1').click(function() {
    $('body').css('color', 'white');
    $('body').css('background-color', 'transparent');
    console.log("transparent1 activated");
    location.href = `${params[0]}?${params[1]}?${params[2]}?3?${params[4]}?${params[5]}`;
  });
  $('#transparent2').click(function() {
    $('body').css('color', 'black');
    $('body').css('background-color', 'transparent');
    console.log("transparent2 activated");
    location.href = `${params[0]}?${params[1]}?${params[2]}?4?${params[4]}?${params[5]}`;
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

  
  var stats1 = 0;
  var stats2 = 0;
  var s1s2 = 0;

  usernamelol(params[1]);
  loaduser2(params[2]);
  compareusers();


var waittime = 1000;
  var count1 = 0;
  var count2 = 0;
  
  function usernamelol() {
    
      url6 = `${key}https://immense-castle-34936.herokuapp.com/@` + params[1],
      url7 = `${key}https://mixernobest.herokuapp.com/ytestimate2/@` + params[1]
      
    
    if(params[4] == "tiktok") {
      $.getJSON(url6, function(data) {

        fans1.innerHTML = Math.floor(data.body.userData.fans)
        count1 = data.body.userData.fans;
name1.innerHTML = data.body.userData.nickName;
$("#img1").attr('src', `${data.body.userData.covers[0]}`);

        
       

    });
    
    }
    if(params[4] == "ytestimation2") {
      $.getJSON(url7, function(data) {

        fans1.innerHTML = Math.floor(data.count)
  name1.innerHTML = data.name;
  $("#img1").attr('src', `${data.avatarurl}`);
  count1 = Math.floor(data.count);
  
        
       
  
    }).fail(function() {
      setTimeout(function() {
        usernamelol();
      }, 500);
    });
  }
    


  }
  function loaduser2() {
      url62 = `${key}https://immense-castle-34936.herokuapp.com/@` + params[2],
      url72 = `${key}https://mixernobest.herokuapp.com/ytestimate2/@` + params[2]
     
    
     if(params[5] == "tiktok") {$.getJSON(url62, function(data) {

      fans2.innerHTML = Math.floor(data.body.userData.fans)
      name2.innerHTML = data.body.userData.nickName;
      count2 = data.body.userData.fans;
      $("#img2").attr('src', `${data.body.userData.covers[0]}`);
     });
     

  }
  if(params[5] == "ytestimation2") {
    $.getJSON(url72, function(data) {

      fans2.innerHTML = Math.floor(data.count)
name2.innerHTML = data.name;
$("#img2").attr('src', `${data.avatarurl}`);
count2 = Math.floor(data.count);

      
     

  }).fail(function() {
    setTimeout(function() {
      loaduser2();
    }, 500);
  });
  }
      
    
  }




function compareusers() {
  setTimeout(function() {
    comp.innerHTML = Math.floor(count1 - count2)
stuff.series[0].addPoint([
  (new Date()).getTime(),
  Math.floor(count1 - count2)
]);
if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
     }, 1000);
}

  setInterval(usernamelol, waittime)
  setInterval(loaduser2, waittime)
  setInterval(compareusers, waittime)
  





});
if(params[3] == 1) {
  $('body').css('color', 'black');
  $('body').css('background-color', 'white');
  console.log("White theme activated")
}
if(params[3] == 2) {

  $('body').css('color', 'white');
  $('body').css('background-color', 'black');
  console.log("Black theme activated")

}
if(params[3] == 3) {

  $('body').css('color', 'white');
  $('body').css('background-color', 'transparent');
  console.log("transparent1 activated")

}
if(params[3] == 4) {

  $('body').css('color', 'black');
  $('body').css('background-color', 'transparent');
  console.log("transparent2 activated")

}
if(params[3] == 5) {

  $('#whiteeodometercolors').click(function() {
   
    $('body').css('color', 'black');
    $('body').css('background-color', 'white');
    //$('odometer.odometer-auto-theme.odometer-animating-up').css('color', 'green');
    //$('odometer.odometer-auto-theme.odometer-animating-down.odometer-animating').css('color', 'red');
    console.log("White theme activated");
    location.href = `${params[0]}?${params[1]}?${params[2]}?5?${params[4]}?${params[5]}`;
  });

}
if(params[3] == 6) {

  $('#blackkodometercolors').click(function() {
    
    $('body').css('color', 'white');
    $('body').css('background-color', 'black');
    //$('odometer.odometer-auto-theme.odometer-animating-up').css('color', 'green');
    //$('odometer.odometer-auto-theme.odometer-animating-down.odometer-animating').css('color', 'red');
    console.log("Black theme activated");
    location.href = `${params[0]}?${params[1]}?${params[2]}?6?${params[4]}?${params[5]}`;
  });
  

}