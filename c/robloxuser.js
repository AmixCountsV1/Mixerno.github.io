//hellou
setTimeout(function() {
    //location.reload();
  }, 7200000);
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://corseverywheremiks.herokuapp.com/' + options.url;
    }
  });

  var followers = "0";
  var videostufflol = window.location.href;
  var params = videostufflol.split('?');
  var chanName = params[1]
  viiName = "";
  var stuff = new Highcharts.chart('container', {
    chart: {
      backgroundColor: 'transparent',
      renderTo: container,
      type: 'line'
    },
    title: {
      text: 'Followers'
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


  usernamelol(params[1]);
  var fol2 = 0;
  var secwait = 5;



  function usernamelol(name) {

    chanName = name;
    $.ajax({
      url: 'https://api.roblox.com/users/' + chanName,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name2.innerHTML = json.Username
        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName + '/followers/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        followers2.innerHTML = json.count
        fol2 = json.count
        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName + '/friends/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        friends2.innerHTML = json.count
        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName + '/followings/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        following2.innerHTML = json.count
        stuff.series[0].addPoint([
            (new Date()).getTime(),
            fol2
          ]);
          if (stuff.series[0].data.length >= 700) {
          stuff.series[0].data[0].remove()
        }
        secwait = 5;

      }
    });
      }
    });
      }
    });

      }
    });
    $.ajax({
        url: `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${chanName}&size=150x150&format=Png&isCircular=false`,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          $("#img3").attr('src', json.data[0].imageUrl);
        }
      });
    
    
    

  }

  function loadVideo(naemhe) {
    viiName = naemhe;
    setTimeout(
      function() {
        loadVideo3($('#chnlName').val());
      }, 5000);


  }



  setInterval(function() {

    $.ajax({
      url: 'https://api.roblox.com/users/' + chanName,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name2.innerHTML = json.Username
        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName + '/followers/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        followers2.innerHTML = json.count
        fol2 = json.count
        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName + '/friends/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        friends2.innerHTML = json.count
        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName + '/followings/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        following2.innerHTML = json.count
        stuff.series[0].addPoint([
            (new Date()).getTime(),
            fol2
          ]);
          if (stuff.series[0].data.length >= 700) {
          stuff.series[0].data[0].remove()
        }
        secwait = 5;

      }
    });
      }
    });
      }
    });

      }
    });
    $.ajax({
        url: `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${chanName}&size=150x150&format=Png&isCircular=false`,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          $("#img3").attr('src', json.data[0].imageUrl);
        }
      });




  }, 5000);
  setInterval(function() {
    if(secwait > 0) {
      secwait = secwait - 1;
      updatemyboi.innerHTML = `${secwait + 1}`
    }
    else {
      updatemyboi.innerHTML = `${secwait + 1}`
    }
    

  }, 1000);



  $('#searchlolnoob3').click(function() {
    loadVideo($('#chnlName').val());
    setTimeout(
      function() {
        //do nothing
      }, 1000);
    location.href = 'http://mixerno.github.io/robloxuser.html?' + viiName;

    console.log("BUTTON4")
  });
