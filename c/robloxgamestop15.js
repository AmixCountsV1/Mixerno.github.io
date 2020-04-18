//hellou
//https://corseverywheremiks.herokuapp.com/https://nobnabob.herokuapp.com/https://mixernob.herokuapp.com/https://mixernocors.herokuapp.com/https://corseverywheremiks.herokuapp.com/
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
    options.url = 'https://corseverywheremiks.herokuapp.com/' + options.url;
    }
  });

  var secwait = 10;
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
      text: 'Players playing combined graph'
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
      name: 'Players playing combined',
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
      url: `https://games.roblox.com/v1/games/list?model.maxRows=23&model.isKeywordSuggestionEnabled=false`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        //top1:
          name2.innerHTML = json.games[0].name 
          playing2.innerHTML = json.games[0].playerCount
          //top 2:
          name3.innerHTML = json.games[1].name 
          playing3.innerHTML = json.games[1].playerCount
          //top 3:
          name4.innerHTML = json.games[2].name 
          playing4.innerHTML = json.games[2].playerCount
          //top 4:
          name5.innerHTML = json.games[3].name 
          playing5.innerHTML = json.games[3].playerCount
          //top 5:
          name6.innerHTML = json.games[4].name 
          playing6.innerHTML = json.games[4].playerCount
          //top 6:
          name7.innerHTML = json.games[5].name 
          playing7.innerHTML = json.games[5].playerCount
          //top 7:
          name8.innerHTML = json.games[6].name 
          playing8.innerHTML = json.games[6].playerCount
          //top 8:
          name9.innerHTML = json.games[7].name 
          playing9.innerHTML = json.games[7].playerCount
          //top 9:
          name10.innerHTML = json.games[9].name 
          playing10.innerHTML = json.games[9].playerCount
          //top 10:
          name11.innerHTML = json.games[10].name 
          playing11.innerHTML = json.games[10].playerCount
          //top11
          name12.innerHTML = json.games[11].name 
          playing12.innerHTML = json.games[11].playerCount
          //top 2:
          name13.innerHTML = json.games[12].name 
          playing13.innerHTML = json.games[12].playerCount
          //top 13:
          name14.innerHTML = json.games[13].name 
          playing14.innerHTML = json.games[13].playerCount
          //top 14:
          name15.innerHTML = json.games[14].name 
          playing15.innerHTML = json.games[14].playerCount
          //top 15:
          name16.innerHTML = json.games[15].name 
          playing16.innerHTML = json.games[15].playerCount
          //top 16:
          name17.innerHTML = json.games[16].name 
          playing17.innerHTML = json.games[16].playerCount
          //top 17:
          name18.innerHTML = json.games[17].name 
          playing18.innerHTML = json.games[17].playerCount
          //top 18:
          name19.innerHTML = json.games[18].name 
          playing19.innerHTML = json.games[18].playerCount
          //top 19:
          name20.innerHTML = json.games[19].name 
          playing20.innerHTML = json.games[19].playerCount
          //top 20:
          name21.innerHTML = json.games[20].name 
          playing21.innerHTML = json.games[20].playerCount
          //top 18:
          name22.innerHTML = json.games[21].name 
          playing22.innerHTML = json.games[21].playerCount
          //top 19:
          name23.innerHTML = json.games[22].name 
          playing23.innerHTML = json.games[22].playerCount
          //other stuff lol
          secwait = 10
          combd.innerHTML = json.games[0].playerCount + json.games[1].playerCount + json.games[2].playerCount + json.games[3].playerCount + json.games[4].playerCount + json.games[5].playerCount + json.games[6].playerCount + json.games[7].playerCount + json.games[9].playerCount + json.games[10].playerCount + json.games[11].playerCount + json.games[12].playerCount + json.games[13].playerCount + json.games[14].playerCount + json.games[15].playerCount + json.games[16].playerCount + json.games[17].playerCount + json.games[18].playerCount + json.games[19].playerCount + json.games[20].playerCount + json.games[21].playerCount + json.games[22].playerCount
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            json.games[0].playerCount + json.games[1].playerCount + json.games[2].playerCount + json.games[3].playerCount + json.games[4].playerCount + json.games[5].playerCount + json.games[6].playerCount + json.games[7].playerCount + json.games[9].playerCount + json.games[10].playerCount + json.games[11].playerCount + json.games[12].playerCount + json.games[13].playerCount + json.games[14].playerCount + json.games[15].playerCount + json.games[16].playerCount + json.games[17].playerCount + json.games[18].playerCount + json.games[19].playerCount + json.games[20].playerCount + json.games[21].playerCount + json.games[22].playerCount 
          ]);
          if (stuff.series[0].data.length >= 350) {
          stuff.series[0].data[0].remove()
        }
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
      url: `https://games.roblox.com/v1/games/list?model.maxRows=23&model.isKeywordSuggestionEnabled=false`,
      // Handle as Text
      dataType: "text",
      success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        //top1:
          name2.innerHTML = json.games[0].name 
          playing2.innerHTML = json.games[0].playerCount
          //top 2:
          name3.innerHTML = json.games[1].name 
          playing3.innerHTML = json.games[1].playerCount
          //top 3:
          name4.innerHTML = json.games[2].name 
          playing4.innerHTML = json.games[2].playerCount
          //top 4:
          name5.innerHTML = json.games[3].name 
          playing5.innerHTML = json.games[3].playerCount
          //top 5:
          name6.innerHTML = json.games[4].name 
          playing6.innerHTML = json.games[4].playerCount
          //top 6:
          name7.innerHTML = json.games[5].name 
          playing7.innerHTML = json.games[5].playerCount
          //top 7:
          name8.innerHTML = json.games[6].name 
          playing8.innerHTML = json.games[6].playerCount
          //top 8:
          name9.innerHTML = json.games[7].name 
          playing9.innerHTML = json.games[7].playerCount
          //top 9:
          name10.innerHTML = json.games[9].name 
          playing10.innerHTML = json.games[9].playerCount
          //top 10:
          name11.innerHTML = json.games[10].name 
          playing11.innerHTML = json.games[10].playerCount
          //top11
          name12.innerHTML = json.games[11].name 
          playing12.innerHTML = json.games[11].playerCount
          //top 2:
          name13.innerHTML = json.games[12].name 
          playing13.innerHTML = json.games[12].playerCount
          //top 13:
          name14.innerHTML = json.games[13].name 
          playing14.innerHTML = json.games[13].playerCount
          //top 14:
          name15.innerHTML = json.games[14].name 
          playing15.innerHTML = json.games[14].playerCount
          //top 15:
          name16.innerHTML = json.games[15].name 
          playing16.innerHTML = json.games[15].playerCount
          //top 16:
          name17.innerHTML = json.games[16].name 
          playing17.innerHTML = json.games[16].playerCount
          //top 17:
          name18.innerHTML = json.games[17].name 
          playing18.innerHTML = json.games[17].playerCount
          //top 18:
          name19.innerHTML = json.games[18].name 
          playing19.innerHTML = json.games[18].playerCount
          //top 19:
          name20.innerHTML = json.games[19].name 
          playing20.innerHTML = json.games[19].playerCount
          //top 20:
          name21.innerHTML = json.games[20].name 
          playing21.innerHTML = json.games[20].playerCount
          //top 18:
          name22.innerHTML = json.games[21].name 
          playing22.innerHTML = json.games[21].playerCount
          //top 19:
          name23.innerHTML = json.games[22].name 
          playing23.innerHTML = json.games[22].playerCount
          //other stuff lol
          secwait = 10
          combd.innerHTML = json.games[0].playerCount + json.games[1].playerCount + json.games[2].playerCount + json.games[3].playerCount + json.games[4].playerCount + json.games[5].playerCount + json.games[6].playerCount + json.games[7].playerCount + json.games[9].playerCount + json.games[10].playerCount + json.games[11].playerCount + json.games[12].playerCount + json.games[13].playerCount + json.games[14].playerCount + json.games[15].playerCount + json.games[16].playerCount + json.games[17].playerCount + json.games[18].playerCount + json.games[19].playerCount + json.games[20].playerCount + json.games[21].playerCount + json.games[22].playerCount
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            json.games[0].playerCount + json.games[1].playerCount + json.games[2].playerCount + json.games[3].playerCount + json.games[4].playerCount + json.games[5].playerCount + json.games[6].playerCount + json.games[7].playerCount + json.games[9].playerCount + json.games[10].playerCount + json.games[11].playerCount + json.games[12].playerCount + json.games[13].playerCount + json.games[14].playerCount + json.games[15].playerCount + json.games[16].playerCount + json.games[17].playerCount + json.games[18].playerCount + json.games[19].playerCount + json.games[20].playerCount + json.games[21].playerCount + json.games[22].playerCount 
          ]);
          if (stuff.series[0].data.length >= 350) {
          stuff.series[0].data[0].remove()
        }
      }
    });
    


  }, 10000);

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
