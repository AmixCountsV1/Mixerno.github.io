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




    function usernamelol() {
      url1 = `${key}https://mixer.com/api/v1/channels/${params[1]}/details`, // mixer
      url2 = `${key}https://freewebtools.com/compteur-youtube/?channelId=` + params[1], // yt subs
      url3 = `${key}https://api.thesocialcounter.com/twitter/?name=` + params[1], //twitter picture and other
      url3x = `https://bastet.socialblade.com/twitter/lookup?query=` + params[1], //twitterfolcount //dailymotion vvvv
      url4 = `${key}https://api.dailymotion.com/users?usernames=${params[1]}&fields=screenname%2Cverified%2Curl%2Cdescription%2Cavatar_720_url%2Ccover_url%2Ccountry%2Cfollowers_total%2Cfollowing_total%2Cplaylists_total%2Cvideos_total%2Cviews_total%2Cid`,
      url5 = `${key}https://storyfire.com/app/users/getProfile/` + params[1], //storydife
      url6 = `${key}https://immense-castle-34936.herokuapp.com/@` + params[1], //tiktok
      url7 = `${key}https://mixernobest.herokuapp.com/ytestimate2/@` + params[1], //yt est
      url8 = `${key}https://blastup.com/instagram/info?username=` + params[1] //ig
      url9 = `${key}https://mcapi.xdefcon.com/server/${params[1]}/full/json` //MC
      url10 = `${key}https://gdbrowser.com/api/profile/` + params[1] //GD user
      url10x = `${key}https://gdbrowser.com/api/level/` + params[1] //gd level
      url11 = `${key}https://api.roblox.com/users/` + params[1]  //roblox user name
      url11x = `${key}https://friends.roblox.com/v1/users/${params[1]}/followers/count`  //roblox user followers
      url11xx = `${key}https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${params[1]}&size=150x150&format=Png&isCircular=false` //roblox user thumbnail
      url12 = `${key}https://games.roblox.com/v1/games?universeIds=` + params[1] //roblox game stats
      url12x = `${key}https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${params[1]}&defaults=true&size=768x432&format=Png&isCircular=false` //roblox game thumbnail
      url13 = `${key}https://groups.roblox.com/v1/groups/` + params[1] //roblox group
      url13x = `${key}https://thumbnails.roblox.com/v1/groups/icons?groupIds=${params[1]}&size=150x150&format=Png&isCircular=false` //roblox group thumbnail



      if(params[3] == "mixer") {
        $.getJSON(url1, function(data) {
          fans1.innerHTML = Math.floor(data.numFollowers)
  name1.innerHTML = data.token;
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
          
  name1.innerHTML = data.name;
  $("#img1").attr('src', `${data.profile_image_url_https}`);
  
          
         

      });
      $.getJSON(url3x, function(data) {
          
        fans1.innerHTML = Math.floor(data)
        stuff.series[0].addPoint([
          (new Date()).getTime(),
          Math.floor(data)
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
      if(params[3] == "ytestimation2") {
        $.getJSON(url7, function(data) {
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
      var temporary1 = 0;
      var temporary2 = 0;
      if(params[3] == "instagram") {
        $.getJSON(url8, function(data) {
          temporary1 = (data.data.followers).replace(/,/g, "")
          fans1.innerHTML = temporary1
          console.log(temporary1);
  name1.innerHTML = data.data.username;
  $("#img1").attr('src', `${data.data.profile_picture}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    temporary1
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "minecraft") {
        $.getJSON(url9, function(data) {
          
          fans1.innerHTML = data.players
  name1.innerHTML = params[1];
  $("#img1").attr('src', `${data.icon}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    data.players
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      var plsnumber = 0;
      if(params[3] == "gdus") {
        $.getJSON(url10, function(data) {
          plsnumber = data.stars.replace(/""/g, "")
          fans1.innerHTML = data.stars.replace(/""/g, "")
          console.log(plsnumber)
  name1.innerHTML = data.username;
  $("#img1").attr('src', `https://gdbrowser.com/icon/${params[1]}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    plsnumber
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "gdld") {
        $.getJSON(url10x, function(data) {
          fans1.innerHTML = data.downloads
  name1.innerHTML = data.name;
  $("#img1").attr('src', ``);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    data.downloads
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "ruf") {
        $.getJSON(url11, function(data) {
          name1.innerHTML = data.Username;
          //fans1.innerHTML = data.downloads
  
  //$("#img1").attr('src', ``);
  $.getJSON(url11x, function(data) {
    //name1.innerHTML = data.Username;
    fans1.innerHTML = data.count
    stuff.series[0].addPoint([
      (new Date()).getTime(),
      data.count
    ]);
  
    if (stuff.series[0].data.length >= 700) {
    stuff.series[0].data[0].remove()
  }
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
      if(params[3] == "rgpn") {
        $.getJSON(url12, function(data) {
          name1.innerHTML = data.data[0].name;
          //fans1.innerHTML = data.downloads
          fans1.innerHTML = data.data[0].playing
    stuff.series[0].addPoint([
      (new Date()).getTime(),
      data.data[0].playing
    ]);
  
    if (stuff.series[0].data.length >= 700) {
    stuff.series[0].data[0].remove()
  }
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
      if(params[3] == "rgm") {
        $.getJSON(url13, function(data) {
          name1.innerHTML = data.name;
          //fans1.innerHTML = data.downloads
          fans1.innerHTML = data.memberCount
    stuff.series[0].addPoint([
      (new Date()).getTime(),
      data.memberCount
    ]);
  
    if (stuff.series[0].data.length >= 700) {
    stuff.series[0].data[0].remove()
  }
  
  
          
         

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
