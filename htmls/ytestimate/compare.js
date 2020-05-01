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



  var count1 = 0;
  var count2 = 0;
  
  function usernamelol() {
    
      url6 = `${key}https://immense-castle-34936.herokuapp.com/@` + params[1],
      url7 = `${key}https://mixernobest.herokuapp.com/ytestimate2/@` + params[1]
      
    

    if(params[4] == "mixer") {
      $.getJSON(url1, function(data) {
        fans1.innerHTML = Math.floor(data.numFollowers)
name1.innerHTML = data.token;
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
    var temporary1 = 0;
      var temporary2 = 0;
      if(params[4] == "instagram") {
        $.getJSON(url8, function(data) {
          temporary1 = (data.data.followers).replace(/,/g, "")
          fans1.innerHTML = temporary1
          count1 = temporary1
          console.log(temporary1);
  name1.innerHTML = data.data.username;
  $("#img1").attr('src', `${data.data.profile_picture}`);

          
         

      });
      }
      if(params[4] == "minecraft") {
        $.getJSON(url9, function(data) {
          
          fans1.innerHTML = data.players
          count1 = data.players
  name1.innerHTML = params[1];
  $("#img1").attr('src', `${data.icon}`);
  
          
         

      });
      }
      var plsnumber = 0;
      if(params[4] == "gdus") {
        $.getJSON(url10, function(data) {
          plsnumber = data.stars.replace(/""/g, "")
          fans1.innerHTML = data.stars.replace(/""/g, "")
          console.log(plsnumber)
          count1 = plsnumber
  name1.innerHTML = data.username;
  $("#img1").attr('src', `https://gdbrowser.com/icon/${params[4]}`);
 
          
         

      });
      }
      if(params[4] == "gdld") {
        $.getJSON(url10x, function(data) {
          fans1.innerHTML = data.downloads
          count1 = data.downloads
  name1.innerHTML = data.name;
  $("#img1").attr('src', ``);
  
          
         

      });
      }
      if(params[4] == "ruf") {
        $.getJSON(url11, function(data) {
          name1.innerHTML = data.Username;
          //fans1.innerHTML = data.downloads
  
  //$("#img1").attr('src', ``);
  $.getJSON(url11x, function(data) {
    //name1.innerHTML = data.Username;
    fans1.innerHTML = data.count
    count1 = data.count
    
  $.getJSON(url11xx, function(data) {
    //name1.innerHTML = data.Username;
    /*fans1.innerHTML = data.count
    stuff.series[0].addPoint([
      (new Date()).getTime(),
      data.count
    ]);
  
    if (stuff.series[0].data.length >= 700) {
    stuff.series[0].data[0].remove()
  }*/
$("#img1").attr('src', `${data.data[0].imageUrl}`);

    
   

});
//$("#img1").attr('src', ``);

    
   

});
          
         

      });
      
      }
      if(params[4] == "rgpn") {
        $.getJSON(url12, function(data) {
          name1.innerHTML = data.data[0].name;
          //fans1.innerHTML = data.downloads
          fans1.innerHTML = data.data[0].playing
          count1 = data.data[0].playing
    
  $.getJSON(url12x, function(data) {
    //name1.innerHTML = data.Username;
    /*fans1.innerHTML = data.count
    stuff.series[0].addPoint([
      (new Date()).getTime(),
      data.count
    ]);
  
    if (stuff.series[0].data.length >= 700) {
    stuff.series[0].data[0].remove()
  }*/
$("#img1").attr('src', `${data.data[0].thumbnails[0].imageUrl}`);

    
   

});
          
         

      });
      
      }
      if(params[4] == "rgm") {
        $.getJSON(url13, function(data) {
          name1.innerHTML = data.name;
          //fans1.innerHTML = data.downloads
          fans1.innerHTML = data.memberCount
          count1 = data.memberCount
    
  
  
          
         

      });
      $.getJSON(url13x, function(data) {
        //name1.innerHTML = data.Username;
        /*fans1.innerHTML = data.count
        stuff.series[0].addPoint([
          (new Date()).getTime(),
          data.count
        ]);
      
        if (stuff.series[0].data.length >= 700) {
        stuff.series[0].data[0].remove()
      }*/
    $("#img1").attr('src', `${data.data[0].imageUrl}`);
    
        
       
    
    });
      
      }
    



  }
  function loaduser2() {
      url62 = `${key}https://immense-castle-34936.herokuapp.com/@` + params[2],
      url72 = `${key}https://mixernobest.herokuapp.com/ytestimate2/@` + params[2]
     
    if(params[5] == "mixer") {$.getJSON(url12, function(data) {
      fans2.innerHTML = Math.floor(data.numFollowers)
      name2.innerHTML = data.token;
      count2 = data.numFollowers;
      $("#img2").attr('src', `${data.user.avatarUrl}`);
     });
     

  }/*
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
     

  }*/
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
  }/*
  var temporary12 = 0;
      var temporary22 = 0;
      if(params[5] == "instagram") {
        $.getJSON(url82, function(data) {
          temporary12 = (data.data.followers).replace(/,/g, "")
          fans2.innerHTML = temporary12
          count2 = temporary12
          console.log(temporary12);
  name2.innerHTML = data.data.username;
  $("#img2").attr('src', `${data.data.profile_picture}`);

          
         

      });
      }*/
      if(params[5] == "minecraft") {
        $.getJSON(url92, function(data) {
          count2 = data.players
          fans2.innerHTML = data.players
  name2.innerHTML = params[2];
  $("#img2").attr('src', `${data.icon}`);
 
          
         

      });
      }
      var plsnumber2 = 0;
      if(params[5] == "gdus") {
        $.getJSON(url102, function(data) {
          plsnumber2 = data.stars.replace(/""/g, "")

          fans2.innerHTML = data.stars.replace(/""/g, "")
          count2 = plsnumber2
          console.log(plsnumber)
          name2.innerHTML = data.username;
  $("#img2").attr('src', `https://gdbrowser.com/icon/${params[5]}`);
  
          
         

      });
      }
      if(params[5] == "gdld") {
        $.getJSON(url10x2, function(data) {
          fans2.innerHTML = data.downloads
          name2.innerHTML = data.name;
          count2 = data.downloads
  $("#img2").attr('src', ``);
  
          
         

      });
      }
      if(params[5] == "ruf") {
        $.getJSON(url112, function(data) {
          name2.innerHTML = data.Username;
          //fans1.innerHTML = data.downloads
  
  //$("#img1").attr('src', ``);
  $.getJSON(url11x2, function(data) {
    //name1.innerHTML = data.Username;
    fans2.innerHTML = data.count
    count2 = data.count
    
  $.getJSON(url11xx2, function(data) {
    //name1.innerHTML = data.Username;
    /*fans1.innerHTML = data.count
    stuff.series[0].addPoint([
      (new Date()).getTime(),
      data.count
    ]);
  
    if (stuff.series[0].data.length >= 700) {
    stuff.series[0].data[0].remove()
  }*/
$("#img2").attr('src', `${data.data[0].imageUrl}`);

    
   

});
//$("#img1").attr('src', ``);

    
   

});
          
         

      });
      
      }
      if(params[5] == "rgpn") {
        $.getJSON(url122, function(data) {
          name2.innerHTML = data.data[0].name;
          //fans1.innerHTML = data.downloads
          fans2.innerHTML = data.data[0].playing
          count2 = data.data[0].playing
    
  $.getJSON(url12x2, function(data) {
    //name1.innerHTML = data.Username;
    /*fans1.innerHTML = data.count
    stuff.series[0].addPoint([
      (new Date()).getTime(),
      data.count
    ]);
  
    if (stuff.series[0].data.length >= 700) {
    stuff.series[0].data[0].remove()
  }*/
$("#img2").attr('src', `${data.data[0].thumbnails[0].imageUrl}`);

    
   

});
          
         

      });
      
      }
      if(params[5] == "rgm") {
        $.getJSON(url132, function(data) {
          name2.innerHTML = data.name;
          //fans1.innerHTML = data.downloads
          fans2.innerHTML = data.memberCount
          count2 = data.memberCount
  
  
          
         

      });
      $.getJSON(url13x2, function(data) {
        //name1.innerHTML = data.Username;
        /*fans1.innerHTML = data.count
        stuff.series[0].addPoint([
          (new Date()).getTime(),
          data.count
        ]);
      
        if (stuff.series[0].data.length >= 700) {
        stuff.series[0].data[0].remove()
      }*/
    $("#img2").attr('src', `${data.data[0].imageUrl}`);
    
        
       
    
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