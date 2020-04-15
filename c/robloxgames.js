//hellou
//https://corseverywheremiks.herokuapp.com/https://nobnabob.herokuapp.com/https://mixernob.herokuapp.com/https://mixernocors.herokuapp.com/https://corseverywheremiks.herokuapp.com/
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
    options.url = 'https://corseverywheremiks.herokuapp.com/' + options.url;
    }
  });

  var secwait = 5;
  var playing3 = 0;
  var visits3 = 0;
  var likes3 = 0;
  var dislikes3 = 0;
  var favourites3 = 0;
  var name3 = 0;
  var videostufflol = window.location.href;
  var params = videostufflol.split('?');
  var chanName = params[1]
  var univverseid = params[1];
  var placeIdo = params[1];
  viiName = "";
  var stuff = new Highcharts.chart('container', {
    chart: {
      backgroundColor: 'transparent',
      renderTo: container,
      type: 'line'
    },
    title: {
      text: 'Players playing graph'
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
      name: 'Players playing graph',
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




  function usernamelol(name) {

    chanName = name;
    $.ajax({
      url: `https://games.roblox.com/v1/games?universeIds=${univverseid}`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
          name2.innerHTML = json.data[0].name 
          playing2.innerHTML = json.data[0].playing
          visits2.innerHTML = json.data[0].visits
          name3 = json.data[0].name
          playing3 = json.data[0].playing
          visits3 = json.data[0].visits
        console.log(json.data[0].name + ' Name nobnonono');
        console.log(json.data[0].visits + ' VIsits nobnonono')
            console.log(json.data[0].playing + ' playinh nobnonono')
            $.ajax({
      url: `https://games.roblox.com/v1/games/votes?universeIds=${univverseid}`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
          likes2.innerHTML = json.data[0].upVotes 
          likes3 = json.data[0].upVotes
          dislikes2.innerHTML = json.data[0].downVotes 
          dislikes3 = json.data[0].downVotes
          $.ajax({
      url: `https://games.roblox.com/v1/games/${univverseid}/favorites/count`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
          favourites2.innerHTML = json.favoritesCount 
          favourites3 = json.favoritesCount
          $.ajax({
      url: `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${univverseid}&defaults=true&size=768x432&format=Png&isCircular=false`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        $("#imglol").attr('src', json.data[0].thumbnails[0].imageUrl);
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            playing3
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
      url: `https://games.roblox.com/v1/games?universeIds=${univverseid}`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
          name2.innerHTML = json.data[0].name 
          playing2.innerHTML = json.data[0].playing
          visits2.innerHTML = json.data[0].visits
          name3 = json.data[0].name
          playing3 = json.data[0].playing
          visits3 = json.data[0].visits
        console.log(json.data[0].name + ' Name nobnonono');
        console.log(json.data[0].visits + ' VIsits nobnonono')
            console.log(json.data[0].playing + ' playinh nobnonono')
            $.ajax({
      url: `https://games.roblox.com/v1/games/votes?universeIds=${univverseid}`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
          likes2.innerHTML = json.data[0].upVotes 
          likes3 = json.data[0].upVotes
          dislikes2.innerHTML = json.data[0].downVotes 
          dislikes3 = json.data[0].downVotes
          $.ajax({
      url: `https://games.roblox.com/v1/games/${univverseid}/favorites/count`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
          favourites2.innerHTML = json.favoritesCount 
          favourites3 = json.favoritesCount
          $.ajax({
      url: `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${univverseid}&defaults=true&size=768x432&format=Png&isCircular=false`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        $("#imglol").attr('src', json.data[0].thumbnails[0].imageUrl);
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            playing3
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
    location.href = 'http://mixerno.github.io/robloxgames.html?' + viiName;

    console.log("BUTTON4")
  });
