setTimeout(function() {
    //location.reload();
  }, 7200000);
  var randomNumber = Math.floor(Math.random()*textArray.length);
  var stufflol = "";
  stufflol = textArray[randomNumber];
  var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
  var key = "https://nobnabob.herokuapp.com/";
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = '' + options.url;
      setInterval(function() {
        var randomNumber = Math.floor(Math.random()*textArray.length);

        key = textArray[randomNumber];
      }, 1000);
    }
  });
  $(document).ready(function() {
    var stuff = new Highcharts.chart('container', {
      chart: {
        backgroundColor: 'transparent',
        renderTo: container,
        type: 'line'
      },
      title: {
        text: `Follower graph`,
        style: {
          color: '#FFFFFF',
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

    var parms = window.location.href;
    var params = parms.split('?');
    var fans2 = "not using here sorry bois.";
    var chanelid = "no";

    usernamelol(params[1]);




    function usernamelol() {

      $.ajax({

        url: 'https://bastet.socialblade.com/twitter/lookup?query=' + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          fans1.innerHTML = json
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            json
          ]);
          if (stuff.series[0].data.length >= 700) {
          stuff.series[0].data[0].remove()
        }


        }
      });
      $.ajax({
//
        url: `${key}https://api.thesocialcounter.com/twitter/?name=` + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          name1.innerHTML = json.name
          $("#img1").attr('src', `${json.profile_image_url}`);
          //gahviplayerslol.innerHTML = json.followers_count
          //gahviplay = json.followers_count
          t.innerHTML = json.statuses_count
          f.innerHTML = json.friends_count
          l.innerHTML = json.favourites_count
          lc.innerHTML = json.listed_count
          ltl.innerHTML = json.status.favorite_count
          ltr.innerHTML = json.status.retweet_count
          
        }
      });
    }






    setInterval(function() {
      $.ajax({

        url: 'https://bastet.socialblade.com/twitter/lookup?query=' + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          fans1.innerHTML = json
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            json
          ]);
          if (stuff.series[0].data.length >= 700) {
          stuff.series[0].data[0].remove()
        }


        }
      });
      $.ajax({
        url: `${key}https://api.thesocialcounter.com/twitter/?name=` + params[1],
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          name1.innerHTML = json.name
          $("#img1").attr('src', `${json.profile_image_url}`);
          //gahviplayerslol.innerHTML = json.followers_count
          //gahviplay = json.followers_count
          t.innerHTML = json.statuses_count
          f.innerHTML = json.friends_count
          l.innerHTML = json.favourites_count
          lc.innerHTML = json.listed_count
          ltl.innerHTML = json.status.favorite_count
          ltr.innerHTML = json.status.retweet_count
          
        }
      });





    }, 4000);






  });
