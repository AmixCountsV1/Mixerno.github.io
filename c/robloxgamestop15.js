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
      type: 'spline'
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
    plotOptions: {
      series: {
          // general options for all series
      },
      spline: {
          // shared options for all spline series
      }
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
      url: `https://games.roblox.com/v1/games/list?model.maxRows=60&model.isKeywordSuggestionEnabled=false`,
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
          //top 16:
          name24.innerHTML = json.games[23].name 
          playing24.innerHTML = json.games[23].playerCount
          //top 17:
          name25.innerHTML = json.games[24].name 
          playing25.innerHTML = json.games[24].playerCount
          //top 18:
          name26.innerHTML = json.games[25].name 
          playing26.innerHTML = json.games[25].playerCount
          //top 19:
          name27.innerHTML = json.games[26].name 
          playing27.innerHTML = json.games[26].playerCount
          //top 20:
          name28.innerHTML = json.games[27].name 
          playing28.innerHTML = json.games[27].playerCount
          //top 18:
          name29.innerHTML = json.games[28].name 
          playing29.innerHTML = json.games[28].playerCount
          //top 19:
          name30.innerHTML = json.games[29].name 
          playing30.innerHTML = json.games[29].playerCount
          //top 19:
          name31.innerHTML = json.games[30].name 
          playing31.innerHTML = json.games[30].playerCount
          //top 20:
          name32.innerHTML = json.games[31].name 
          playing32.innerHTML = json.games[31].playerCount
          //top 18:
          name33.innerHTML = json.games[32].name 
          playing33.innerHTML = json.games[32].playerCount
          //top 19:
          name34.innerHTML = json.games[33].name 
          playing34.innerHTML = json.games[33].playerCount
          //top 16:
          name35.innerHTML = json.games[34].name 
          playing35.innerHTML = json.games[34].playerCount
          //top 17:
          name36.innerHTML = json.games[35].name 
          playing36.innerHTML = json.games[35].playerCount
          //top 18:
          name37.innerHTML = json.games[36].name 
          playing37.innerHTML = json.games[36].playerCount
          //top 19:
          name38.innerHTML = json.games[37].name 
          playing38.innerHTML = json.games[37].playerCount
          //top 20:
          name39.innerHTML = json.games[38].name 
          playing39.innerHTML = json.games[38].playerCount
          //top 18:
          name40.innerHTML = json.games[39].name 
          playing40.innerHTML = json.games[39].playerCount
          //top 19:
          name41.innerHTML = json.games[40].name 
          playing41.innerHTML = json.games[40].playerCount
          //top idk
          name42.innerHTML = json.games[41].name 
          playing42.innerHTML = json.games[41].playerCount
          //top 18:
          name43.innerHTML = json.games[42].name 
          playing43.innerHTML = json.games[42].playerCount
          //top 19:
          name44.innerHTML = json.games[43].name 
          playing44.innerHTML = json.games[43].playerCount
          //top 16:
          name45.innerHTML = json.games[44].name 
          playing45.innerHTML = json.games[44].playerCount
          //top 17:
          name46.innerHTML = json.games[45].name 
          playing46.innerHTML = json.games[45].playerCount
          //top 18:
          name47.innerHTML = json.games[46].name 
          playing47.innerHTML = json.games[46].playerCount
          //top 19:
          name48.innerHTML = json.games[47].name 
          playing48.innerHTML = json.games[47].playerCount
          //top 20:
          name49.innerHTML = json.games[48].name 
          playing49.innerHTML = json.games[48].playerCount
          //top 18:
          name50.innerHTML = json.games[49].name 
          playing50.innerHTML = json.games[49].playerCount
          //top 19:
          name51.innerHTML = json.games[50].name 
          playing51.innerHTML = json.games[50].playerCount
          //top 19:
          name52.innerHTML = json.games[51].name 
          playing52.innerHTML = json.games[51].playerCount
          //other stuff lol
          secwait = 10
          combd.innerHTML = json.games[0].playerCount + json.games[1].playerCount + json.games[2].playerCount + json.games[3].playerCount + json.games[4].playerCount + json.games[5].playerCount + json.games[6].playerCount + json.games[7].playerCount + json.games[9].playerCount + json.games[10].playerCount + json.games[11].playerCount + json.games[12].playerCount + json.games[13].playerCount + json.games[14].playerCount + json.games[15].playerCount + json.games[16].playerCount + json.games[17].playerCount + json.games[18].playerCount + json.games[19].playerCount + json.games[20].playerCount + json.games[21].playerCount + json.games[22].playerCount + json.games[23].playerCount + json.games[24].playerCount + json.games[26].playerCount + json.games[27].playerCount + json.games[28].playerCount + json.games[29].playerCount + json.games[30].playerCount + json.games[31].playerCount + json.games[32].playerCount + json.games[34].playerCount + json.games[35].playerCount + json.games[36].playerCount + json.games[37].playerCount + json.games[38].playerCount + json.games[39].playerCount + json.games[40].playerCount + json.games[41].playerCount + json.games[42].playerCount + json.games[43].playerCount + json.games[44].playerCount + json.games[45].playerCount + json.games[46].playerCount + json.games[47].playerCount + json.games[48].playerCount + json.games[49].playerCount + json.games[50].playerCount + json.games[51].playerCount
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            json.games[0].playerCount + json.games[1].playerCount + json.games[2].playerCount + json.games[3].playerCount + json.games[4].playerCount + json.games[5].playerCount + json.games[6].playerCount + json.games[7].playerCount + json.games[9].playerCount + json.games[10].playerCount + json.games[11].playerCount + json.games[12].playerCount + json.games[13].playerCount + json.games[14].playerCount + json.games[15].playerCount + json.games[16].playerCount + json.games[17].playerCount + json.games[18].playerCount + json.games[19].playerCount + json.games[20].playerCount + json.games[21].playerCount + json.games[22].playerCount + json.games[23].playerCount + json.games[24].playerCount + json.games[26].playerCount + json.games[27].playerCount + json.games[28].playerCount + json.games[29].playerCount + json.games[30].playerCount + json.games[31].playerCount + json.games[32].playerCount + json.games[34].playerCount + json.games[35].playerCount + json.games[36].playerCount + json.games[37].playerCount + json.games[38].playerCount + json.games[39].playerCount + json.games[40].playerCount + json.games[41].playerCount + json.games[42].playerCount + json.games[43].playerCount + json.games[44].playerCount + json.games[45].playerCount + json.games[46].playerCount + json.games[47].playerCount + json.games[48].playerCount + json.games[49].playerCount + json.games[50].playerCount + json.games[51].playerCount 
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
    console.log("beta");
    $.ajax({
      url: `https://games.roblox.com/v1/games/list?model.maxRows=60&model.isKeywordSuggestionEnabled=false`,
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
          //top 16:
          name24.innerHTML = json.games[23].name 
          playing24.innerHTML = json.games[23].playerCount
          //top 17:
          name25.innerHTML = json.games[24].name 
          playing25.innerHTML = json.games[24].playerCount
          //top 18:
          name26.innerHTML = json.games[25].name 
          playing26.innerHTML = json.games[25].playerCount
          //top 19:
          name27.innerHTML = json.games[26].name 
          playing27.innerHTML = json.games[26].playerCount
          //top 20:
          name28.innerHTML = json.games[27].name 
          playing28.innerHTML = json.games[27].playerCount
          //top 18:
          name29.innerHTML = json.games[28].name 
          playing29.innerHTML = json.games[28].playerCount
          //top 19:
          name30.innerHTML = json.games[29].name 
          playing30.innerHTML = json.games[29].playerCount
          //top 19:
          name31.innerHTML = json.games[30].name 
          playing31.innerHTML = json.games[30].playerCount
          //top 20:
          name32.innerHTML = json.games[31].name 
          playing32.innerHTML = json.games[31].playerCount
          //top 18:
          name33.innerHTML = json.games[32].name 
          playing33.innerHTML = json.games[32].playerCount
          //top 19:
          name34.innerHTML = json.games[33].name 
          playing34.innerHTML = json.games[33].playerCount
          //top 16:
          name35.innerHTML = json.games[34].name 
          playing35.innerHTML = json.games[34].playerCount
          //top 17:
          name36.innerHTML = json.games[35].name 
          playing36.innerHTML = json.games[35].playerCount
          //top 18:
          name37.innerHTML = json.games[36].name 
          playing37.innerHTML = json.games[36].playerCount
          //top 19:
          name38.innerHTML = json.games[37].name 
          playing38.innerHTML = json.games[37].playerCount
          //top 20:
          name39.innerHTML = json.games[38].name 
          playing39.innerHTML = json.games[38].playerCount
          //top 18:
          name40.innerHTML = json.games[39].name 
          playing40.innerHTML = json.games[39].playerCount
          //top 19:
          name41.innerHTML = json.games[40].name 
          playing41.innerHTML = json.games[40].playerCount
          //top idk
          name42.innerHTML = json.games[41].name 
          playing42.innerHTML = json.games[41].playerCount
          //top 18:
          name43.innerHTML = json.games[42].name 
          playing43.innerHTML = json.games[42].playerCount
          //top 19:
          name44.innerHTML = json.games[43].name 
          playing44.innerHTML = json.games[43].playerCount
          //top 16:
          name45.innerHTML = json.games[44].name 
          playing45.innerHTML = json.games[44].playerCount
          //top 17:
          name46.innerHTML = json.games[45].name 
          playing46.innerHTML = json.games[45].playerCount
          //top 18:
          name47.innerHTML = json.games[46].name 
          playing47.innerHTML = json.games[46].playerCount
          //top 19:
          name48.innerHTML = json.games[47].name 
          playing48.innerHTML = json.games[47].playerCount
          //top 20:
          name49.innerHTML = json.games[48].name 
          playing49.innerHTML = json.games[48].playerCount
          //top 18:
          name50.innerHTML = json.games[49].name 
          playing50.innerHTML = json.games[49].playerCount
          //top 19:
          name51.innerHTML = json.games[50].name 
          playing51.innerHTML = json.games[50].playerCount
          //top 19:
          name52.innerHTML = json.games[51].name 
          playing52.innerHTML = json.games[51].playerCount
          //other stuff lol
          secwait = 10
          combd.innerHTML = json.games[0].playerCount + json.games[1].playerCount + json.games[2].playerCount + json.games[3].playerCount + json.games[4].playerCount + json.games[5].playerCount + json.games[6].playerCount + json.games[7].playerCount + json.games[9].playerCount + json.games[10].playerCount + json.games[11].playerCount + json.games[12].playerCount + json.games[13].playerCount + json.games[14].playerCount + json.games[15].playerCount + json.games[16].playerCount + json.games[17].playerCount + json.games[18].playerCount + json.games[19].playerCount + json.games[20].playerCount + json.games[21].playerCount + json.games[22].playerCount + json.games[23].playerCount + json.games[24].playerCount + json.games[26].playerCount + json.games[27].playerCount + json.games[28].playerCount + json.games[29].playerCount + json.games[30].playerCount + json.games[31].playerCount + json.games[32].playerCount + json.games[34].playerCount + json.games[35].playerCount + json.games[36].playerCount + json.games[37].playerCount + json.games[38].playerCount + json.games[39].playerCount + json.games[40].playerCount + json.games[41].playerCount + json.games[42].playerCount + json.games[43].playerCount + json.games[44].playerCount + json.games[45].playerCount + json.games[46].playerCount + json.games[47].playerCount + json.games[48].playerCount + json.games[49].playerCount + json.games[50].playerCount + json.games[51].playerCount
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            json.games[0].playerCount + json.games[1].playerCount + json.games[2].playerCount + json.games[3].playerCount + json.games[4].playerCount + json.games[5].playerCount + json.games[6].playerCount + json.games[7].playerCount + json.games[9].playerCount + json.games[10].playerCount + json.games[11].playerCount + json.games[12].playerCount + json.games[13].playerCount + json.games[14].playerCount + json.games[15].playerCount + json.games[16].playerCount + json.games[17].playerCount + json.games[18].playerCount + json.games[19].playerCount + json.games[20].playerCount + json.games[21].playerCount + json.games[22].playerCount + json.games[23].playerCount + json.games[24].playerCount + json.games[26].playerCount + json.games[27].playerCount + json.games[28].playerCount + json.games[29].playerCount + json.games[30].playerCount + json.games[31].playerCount + json.games[32].playerCount + json.games[34].playerCount + json.games[35].playerCount + json.games[36].playerCount + json.games[37].playerCount + json.games[38].playerCount + json.games[39].playerCount + json.games[40].playerCount + json.games[41].playerCount + json.games[42].playerCount + json.games[43].playerCount + json.games[44].playerCount + json.games[45].playerCount + json.games[46].playerCount + json.games[47].playerCount + json.games[48].playerCount + json.games[49].playerCount + json.games[50].playerCount + json.games[51].playerCount 
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
