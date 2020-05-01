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
      $('body').css('color', 'black');
      $('body').css('background-color', 'white');
      console.log("White theme activated");
      location.href = `${params[0]}?${params[1]}?1?${params[3]}`;
    });
    $('#blackk').click(function() {
      $('body').css('color', 'white');
      $('body').css('background-color', 'black');
      console.log("Black theme activated");
      location.href = `${params[0]}?${params[1]}?2?${params[3]}`;
    });
    $('#transparent1').click(function() {
      $('body').css('color', 'white');
      $('body').css('background-color', 'transparent');
      console.log("transparent1 activated");
      location.href = `${params[0]}?${params[1]}?3?${params[3]}`;
    });
    $('#transparent2').click(function() {
      $('body').css('color', 'black');
      $('body').css('background-color', 'transparent');
      console.log("transparent2 activated");
      location.href = `${params[0]}?${params[1]}?4?${params[3]}`;
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

    
    var fans2 = "not using here sorry bois.";
    var chanelid = "no";
    usernamelol(params[1]);


var waittime = 4000;
if(params[3] == "tiktok") {
  waittime = 4000
  
}
if(params[3] == "ytestimation2") {
  waittime = 1000;
  
}

    function usernamelol() {
      
      url6 = `${key}https://immense-castle-34936.herokuapp.com/@` + params[1], //tiktok
      url7 = `${key}https://mixernobest.herokuapp.com/ytestimate2/@` + params[1] //yt est
     

     
      
      
      if(params[3] == "tiktok") {
        $.getJSON(url6, function(data) {
          waittime = 4000
          fans1.innerHTML = Math.floor(data.body.userData.fans)
  name1.innerHTML = data.body.userData.nickName;
  $("#img1").attr('src', `${data.body.userData.covers[0]}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.body.userData.fans)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "ytestimation2") {
        $.getJSON(url7, function(data) {
          waittime = 1000
          fans1.innerHTML = Math.floor(data.count)
  name1.innerHTML = data.name;
  $("#img1").attr('src', `${data.avatarurl}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.count)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      }).fail(function() {
        setTimeout(function() {
          usernamelol();
        }, 500);
      });
      }
      



    }






    setInterval(usernamelol, waittime)






  });
  if(params[2] == 1) {
    $('body').css('color', 'black');
    $('body').css('background-color', 'white');
    console.log("White theme activated")
  }
  if(params[2] == 2) {
  
    $('body').css('color', 'white');
    $('body').css('background-color', 'black');
    console.log("Black theme activated")
  
  }
  if(params[2] == 3) {
  
    $('body').css('color', 'white');
    $('body').css('background-color', 'transparent');
    console.log("transparent1 activated")
  
  }
  if(params[2] == 4) {
  
    $('body').css('color', 'black');
    $('body').css('background-color', 'transparent');
    console.log("transparent2 activated")
  
  }
