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
      var randomNumber = Math.floor(Math.random()*textArray.length);

      key = textArray[randomNumber];
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



  var count1 = 0;
  var count2 = 0;
  
  function usernamelol() {
    url1 = `${key}https://mixer.com/api/v1/channels/${params[1]}/details`,
      url2 = `${key}https://mixernobest.herokuapp.com/ytestimate/@` + params[1],
      url3 = `${key}https://api.thesocialcounter.com/twitter/?name=` + params[1],
      url3x = `https://bastet.socialblade.com/twitter/lookup?query=` + params[1],
      url4 = `${key}https://api.dailymotion.com/users?usernames=${params[1]}&fields=screenname%2Cverified%2Curl%2Cdescription%2Cavatar_720_url%2Ccover_url%2Ccountry%2Cfollowers_total%2Cfollowing_total%2Cplaylists_total%2Cvideos_total%2Cviews_total%2Cid`,
      url5 = `${key}https://storyfire.com/app/users/getProfile/` + params[1],
      url6 = `${key}https://mixernobest.herokuapp.com/tiktok/@` + params[1]
    

    if(params[4] == "mixer") {
      $.getJSON(url1, function(data) {
        fans1.innerHTML = Math.floor(data.numFollowers)
name1.innerHTML = data.name;
count1 = data.numFollowers;
$("#img1").attr('src', `${data.user.avatarUrl}`);
    });
    
    }
    if(params[4] == "youtube") {
      $.getJSON(url2, function(data) {
        fans1.innerHTML = Math.floor(data.count)
        count1 = data.count;
name1.innerHTML = data.name;
$("#img1").attr('src', `${data.avatarurl}`);

        
       

    });
    
    }
    if(params[4] == "twitter") {
      $.getJSON(url3, function(data) {
        //fans1.innerHTML = Math.floor(data.followers_count)
        
name1.innerHTML = data.name;
$("#img1").attr('src', `${data.profile_image_url_https}`);

        
       

    });
    $.getJSON(url3x, function(data) {
          
      fans1.innerHTML = Math.floor(data)
      count1 = data;
              
             
    
          });
    
    }
    if(params[4] == "dailymotion") {
      $.getJSON(url4, function(data) {
        fans1.innerHTML = Math.floor(data.list[0].followers_total)
        count1 = data.list[0].followers_total;
name1.innerHTML = data.list[0].screenname;
$("#img1").attr('src', `${data.list[0].avatar_720_url}`);

        
       

    });
    
    }
    if(params[4] == "storyfire") {
      $.getJSON(url5, function(data) {
        fans1.innerHTML = Math.floor(data.followersCount)
        count1 = data.followersCount;
name1.innerHTML = data.username;
$("#img1").attr('src', `${data.userimage}`);

        
       

    });
    
    }
    if(params[4] == "tiktok") {
      $.getJSON(url6, function(data) {
        fans1.innerHTML = Math.floor(data.body.userData.fans)
        count1 = data.body.userData.fans;
name1.innerHTML = data.body.userData.nickName;
$("#img1").attr('src', `${data.body.userData.covers[0]}`);

        
       

    });
    
    }



  }
  function loaduser2() {
    url12 = `${key}https://mixer.com/api/v1/channels/${params[2]}/details`,
      url22 = `${key}https://mixernobest.herokuapp.com/ytestimate/@` + params[2],
      url32 = `${key}https://api.thesocialcounter.com/twitter/?name=` + params[2],
      url3x2 = `https://bastet.socialblade.com/twitter/lookup?query=` + params[2],
      url42 = `${key}https://api.dailymotion.com/users?usernames=${params[2]}&fields=screenname%2Cverified%2Curl%2Cdescription%2Cavatar_720_url%2Ccover_url%2Ccountry%2Cfollowers_total%2Cfollowing_total%2Cplaylists_total%2Cvideos_total%2Cviews_total%2Cid`,
      url52 = `${key}https://storyfire.com/app/users/getProfile/` + params[2],
      url62 = `${key}https://mixernobest.herokuapp.com/tiktok/@` + params[2]
    if(params[5] == "mixer") {$.getJSON(url12, function(data) {
      fans2.innerHTML = Math.floor(data.numFollowers)
      name2.innerHTML = data.name;
      count2 = data.numFollowers;
      $("#img2").attr('src', `${data.user.avatarUrl}`);
     });
     

  }
     if(params[5] == "youtube") {$.getJSON(url22, function(data) {
      fans2.innerHTML = Math.floor(data.count)
      name2.innerHTML = data.name;
      count2 = data.count;
      $("#img2").attr('src', `${data.avatarurl}`);
     });
     

  }
     if(params[5] == "twitter") {$.getJSON(url32, function(data) {
      //fans2.innerHTML = Math.floor(data.followers_count)
      name2.innerHTML = data.name;
      //count2 = data.followers_count;
      $("#img2").attr('src', `${data.profile_image_url_https}`);
     });
     $.getJSON(url3x2, function(data) {
          
      fans2.innerHTML = Math.floor(data)
      count2 = data;
              
             
    
          });
     

  }
     if(params[5] == "dailymotion") {$.getJSON(url42, function(data) {
      fans2.innerHTML = Math.floor(data.list[0].followers_total)
      name2.innerHTML = data.list[0].screenname;
      count2 = data.list[0].followers_total;
      $("#img2").attr('src', `${data.list[0].avatar_720_url}`);
     });
     

  }
     if(params[5] == "storyfire") {$.getJSON(url52, function(data) {
      fans2.innerHTML = Math.floor(data.followersCount)
      name2.innerHTML = data.username;
      count2 = data.followersCount;
      $("#img2").attr('src', `${data.userimage}`);
     });
     

  }
     if(params[5] == "tiktok") {$.getJSON(url62, function(data) {
      fans2.innerHTML = Math.floor(data.body.userData.fans)
      name2.innerHTML = data.body.userData.nickName;
      count2 = data.body.userData.fans;
      $("#img2").attr('src', `${data.body.userData.covers[0]}`);
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

  setInterval(usernamelol, 4000)
  setInterval(loaduser2, 4000)
  setInterval(compareusers, 4000)
  





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