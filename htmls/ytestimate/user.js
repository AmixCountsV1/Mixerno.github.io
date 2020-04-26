setTimeout(function() {
    //location.reload();
  }, 7200000);
  var randomNumber = Math.floor(Math.random()*textArray.length);
  var stufflol = "";
  stufflol = textArray[randomNumber];
  var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
  var key = "https://nugisextremelynice.herokuapp.com/";
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      //options.url = key + options.url;
      setInterval(function() {
        var randomNumber = Math.floor(Math.random()*textArray.length);

        key = textArray[randomNumber];
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




    function usernamelol() {
      url1 = 'https://mixernobest.herokuapp.com/mixer/@' + params[1],
      url2 = 'https://mixernobest.herokuapp.com/ytestimate/@' + params[1],
      url3 = 'https://mixernobest.herokuapp.com/twitter/@' + params[1],
      url4 = 'https://mixernobest.herokuapp.com/dailymotion/@' + params[1],
      url5 = 'https://mixernobest.herokuapp.com/storyfire/@' + params[1],
      url6 = 'https://mixernobest.herokuapp.com/tiktok/@' + params[1]

      if(params[3] == "mixer") {
        $.getJSON(url1, function(data) {
          fans1.innerHTML = Math.floor(data.numFollowers)
  name1.innerHTML = data.name;
  $("#img1").attr('src', `${data.user.avatarUrl}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.numFollowers)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "youtube") {
        $.getJSON(url2, function(data) {
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
          
         

      });
      }
      if(params[3] == "twitter") {
        $.getJSON(url3, function(data) {
          fans1.innerHTML = Math.floor(data.followers_count)
  name1.innerHTML = data.name;
  $("#img1").attr('src', `${data.profile_image_url_https}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.followers_count)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "dailymotion") {
        $.getJSON(url4, function(data) {
          fans1.innerHTML = Math.floor(data.list[0].followers_total)
  name1.innerHTML = data.list[0].screenname;
  $("#img1").attr('src', `${data.list[0].avatar_720_url}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.list[0].followers_total)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "storyfire") {
        $.getJSON(url5, function(data) {
          fans1.innerHTML = Math.floor(data.followersCount)
  name1.innerHTML = data.username;
  $("#img1").attr('src', `${data.userimage}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.followersCount)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "tiktok") {
        $.getJSON(url6, function(data) {
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



    }






    setInterval(usernamelol, 4000)






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
