//hellou
setTimeout(function() {
    //location.reload();
  }, 7200000);
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://corseverywheremiks.herokuapp.com/' + options.url;
    }
  });

  var followers1 = "0";
  var followers2 = "0";
  var videostufflol = window.location.href;
  var params = videostufflol.split('?');
  var chanName = params[1]
  var chanName2 = params[2]
  viiName = "";
  var stuff = new Highcharts.chart('container', {
    chart: {
      backgroundColor: 'transparent',
      renderTo: container,
      type: 'line'
    },
    title: {
      text: 'Follower Diffrence'
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
      name: 'Follower Diffrence',
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
  var fol4 = 0;
  var secwait = 5;



  function usernamelol(name) {

    chanName = params[1];
    chanName2 = params[2];
    $.ajax({
      url: 'https://api.roblox.com/users/' + chanName,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name3.innerHTML = json.Username
        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName + '/followers/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        followers3.innerHTML = json.count
        fol2 = json.count
        secwait = 5;
        dif1.innerHTML = fol2 - fol4
        
      }
    });
      }
    });
    $.ajax({
      url: 'https://api.roblox.com/users/' + chanName2,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name4.innerHTML = json.Username

        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName2 + '/followers/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        followers4.innerHTML = json.count
        fol4 = json.count
        secwait = 5;
        dif1.innerHTML = fol2 - fol4
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
    $.ajax({
      url: `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${chanName2}&size=150x150&format=Png&isCircular=false`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        $("#img4").attr('src', json.data[0].imageUrl);
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

    chanName = params[1];
    chanName2 = params[2];
    $.ajax({
      url: 'https://api.roblox.com/users/' + chanName,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name3.innerHTML = json.Username
        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName + '/followers/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        followers3.innerHTML = json.count
        fol2 = json.count

        $.ajax({
      url: 'https://api.roblox.com/users/' + chanName2,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name4.innerHTML = json.Username

        $.ajax({
      url: 'https://friends.roblox.com/v1/users/' + chanName2 + '/followers/count',
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        followers4.innerHTML = json.count
        fol4 = json.count
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
        $.ajax({
      url: `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${chanName2}&size=150x150&format=Png&isCircular=false`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        $("#img4").attr('src', json.data[0].imageUrl);
        secwait = 5;
        dif1.innerHTML = fol2 - fol4
    stuff.series[0].addPoint([
            (new Date()).getTime(),
            fol2 - fol4
          ]);
          if (stuff.series[0].data.length >= 700) {
          stuff.series[0].data[0].remove()
        }
      }
    });
      }
    });
      }
    });
      }
    });
      }
    });
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
