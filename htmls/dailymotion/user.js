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
      options.url = key + options.url;
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
  
          url: `https://api.dailymotion.com/users?usernames=${params[1]}&fields=screenname%2Cverified%2Curl%2Cdescription%2Cavatar_720_url%2Ccover_url%2Ccountry%2Cfollowers_total%2Cfollowing_total%2Cplaylists_total%2Cvideos_total%2Cviews_total%2Cid`,
          // Handle as Text
          dataType: "text",
          success: function(data) {
            // Parse JSON file
            var json = $.parseJSON(data);
            //Store data into a variable
            // Display Players
            //$('#gahviplayerslol').html(json.body.userData.fans)
            fans1.innerHTML = json.list[0].followers_total
            name1.innerHTML = json.list[0].screenname
            chanelid = json.list[0].id
            $("#img1").attr('src', `${json.list[0].avatar_720_url}`);
            fol1.innerHTML = json.list[0].following_total
            pl1.innerHTML = json.list[0].playlists_total
            vid1.innerHTML = json.list[0].videos_total
            views1.innerHTML = json.list[0].views_total
            stuff.series[0].addPoint([
              (new Date()).getTime(),
              json.list[0].followers_total
            ]);
            if (stuff.series[0].data.length >= 700) {
            stuff.series[0].data[0].remove()
          }
            //gahviplayerslol.innerHTML = json.followers_count
            //gahviplay = json.followers_count
  
          }
        });
    }






    setInterval(function() {
      $.ajax({
  
        url: `https://api.dailymotion.com/users?usernames=${params[1]}&fields=screenname%2Cverified%2Curl%2Cdescription%2Cavatar_720_url%2Ccover_url%2Ccountry%2Cfollowers_total%2Cfollowing_total%2Cplaylists_total%2Cvideos_total%2Cviews_total%2Cid`,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          fans1.innerHTML = json.list[0].followers_total
          name1.innerHTML = json.list[0].screenname
          chanelid = json.list[0].id
          $("#img1").attr('src', `${json.list[0].avatar_720_url}`);
          fol1.innerHTML = json.list[0].following_total
          pl1.innerHTML = json.list[0].playlists_total
          vid1.innerHTML = json.list[0].videos_total
          views1.innerHTML = json.list[0].views_total
          stuff.series[0].addPoint([
            (new Date()).getTime(),
            json.list[0].followers_total
          ]);
          if (stuff.series[0].data.length >= 700) {
          stuff.series[0].data[0].remove()
        }
          //gahviplayerslol.innerHTML = json.followers_count
          //gahviplay = json.followers_count

        }
      });
          





    }, 4000);






  });
