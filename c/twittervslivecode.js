setTimeout(function() {
    //location.reload();
  }, 7200000);
  var textArray = [ //All the cors anywhere urls.
                'https://corseverywheremiks.herokuapp.com/',
                'https://mixernocors.herokuapp.com/',
                'https://mixernob.herokuapp.com/',
                'https://nobnabob.herokuapp.com/',
                ];
  var randomNumber = Math.floor(Math.random()*textArray.length);
  var stufflol = "";
  stufflol = textArray[randomNumber];
  var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
  var key = "";
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = '' + options.url;
    }
  });
  $(document).ready(function() {



    var videostufflol = window.location.href;
    var videostufflol2 = window.location.href;
    var params = videostufflol.split('?');
    var motiplay = "0";
    var gahviplay = "0";
    var gap = "0";
    var readygap = "0";
    var secsinhour = "0";
    var gap1min = "0";
    var gap1ho = "0";
    var tik1 = "0";
    var tik2 = "0";
    var secsinhour2 = "0";
    var chanName = "";
    var chanName2 = "";
    var chanName22 = "";
    chanName = params[1]
    chanName2 = params[2]
    viiName = "";
    viiNam2e = "";
    viiNam22e = "";


    usernamelol(params[1]);
    usernamelol2(params[2]);
    loadVideo3("random lol nothing really :)");




    function usernamelol(name) {


      chanName = params[1];
      $.ajax({

        url: 'https://bastet.socialblade.com/twitter/lookup?query=' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          gahviplayerslol.innerHTML = json
          gahviplay = json
          readygap = readygap + "1"


        }
      });
      tiktoker1.innerHTML = params[1];
      $.ajax({

        url: 'https://corseverywheremiks.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          $('#img1').html('<img src=\"' + json.profile_image_url + '\">');
          //gahviplayerslol.innerHTML = json.followers_count
          //gahviplay = json.followers_count


        }
      });
    }

    function usernamelol2(name2) {
      chanName2 = params[2];
      $.ajax({

        url: 'https://bastet.socialblade.com/twitter/lookup?query=' + chanName2,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          motiplayers.innerHTML = json
          motiplay = json
          readygap = readygap + "1"


        }
      });
      tiktoker2.innerHTML = params[2];
      $.ajax({

        url: 'https://corseverywheremiks.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=' + chanName2,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#motiplayers').html(json.body.userData.fans)

          $('#img2').html('<img src=\"' + json.profile_image_url + '\">');
          //motiplayers.innerHTML = json.followers_count
          //motiplay = json.followers_count


        }
      });
    }
    if (readygap > "-1") {
      console.log(gap)
      gap = gahviplay - motiplay;
      pdiff.innerHTML = gahviplay - motiplay;
      gap1ho = gap
      gap1min = gap
      setInterval(function() {
        gap = gahviplay - motiplay;
        pdiff.innerHTML = gahviplay - motiplay;
      }, 1000);
    }


    function loadVideo(naemhe) {
      viiName = naemhe;
      setTimeout(
        function() {
          loadVideo3($('#chnlName').val());
        }, 5000);


    }

    function loadVideo2(namehe) {

      viiNam2e = namehe;



    }

    function loadVideo3(namehe2) {

      viiNam22e = namehe2;



    }
    if (readygap > 010) {
      gap1min = gap
    }



    setInterval(function() {
      console.log(readygap)
      chanName = params[1];
      tiktoker1.innerHTML = params[1];
      $.ajax({

        url: 'https://bastet.socialblade.com/twitter/lookup?query=' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          gahviplayerslol.innerHTML = json
          gahviplay = json


        }
      });
      $.ajax({

        url: 'https://corseverywheremiks.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          $('#img1').html('<img src=\"' + json.profile_image_url + '\">');
          //gahviplayerslol.innerHTML = json.followers_count
          //gahviplay = json.followers_count


        }
      });
      chanName2 = params[2];
      tiktoker2.innerHTML = params[2];
      $.ajax({

        url: 'https://bastet.socialblade.com/twitter/lookup?query=' + chanName2,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#gahviplayerslol').html(json.body.userData.fans)
          motiplayers.innerHTML = json
          motiplay = json


        }
      });
      $.ajax({

        url: 'https://corseverywheremiks.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=' + chanName2,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          //$('#motiplayers').html(json.body.userData.fans)

          $('#img2').html('<img src=\"' + json.profile_image_url + '\">');
          //motiplayers.innerHTML = json.followers_count
          //motiplay = json.followers_count


        }
      });








    }, 2000);





    setInterval(function() {
      stuff.series[0].addPoint([
        (new Date()).getTime(),
        gahviplay - motiplay
      ]);
      if (stuff.series[0].data.length >= 700) {
			stuff.series[0].data[0].remove()
		}
    }, 2000);
    var stuff = new Highcharts.chart('container', {
      chart: {
        backgroundColor: 'transparent',
        renderTo: $('#container'),
        type: 'line'
      },

      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 1
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
        exporting: {
          enabled: false
        },

      }]
    })
    setInterval(function() {


      secsinhour = secsinhour + 1000
      if (secsinhour > 60000) {
        secsinhour = 0
        gap1min = gap

        //$('#gap1m').text(gap - gap1min)
        gap1m.innerHTML = gap - gap1min;
      }
      if (gap > "-1") {
        //$('#gap1m').text(gap - gap1min)
        gap1m.innerHTML = gap - gap1min;
      }
      if (gap < "-1") {
        //$('#gap1m').text(gap - gap1min)
        gap1m.innerHTML = gap - gap1min;
      }









      console.log(secsinhour + ' /60000')

      console.log(gap - gap1min + ' gap1min')
      console.log(gap + ' gap')
      console.log(gap1min + ' gap1min')
      console.log(gahviplay + ' normal')
      console.log(motiplay + ' china')




    }, 1000);
    setInterval(function() {


      secsinhour2 = secsinhour2 + 1000
      if (secsinhour2 > 3600000) {
        secsinhour2 = 0
        gap1ho = gap
        tik1 = gahviplay
        tik2 = motiplay

        //$('#gap1m').text(gap - gap1min)
        gap1h.innerHTML = gap - gap1ho;
        ohh1.innerHTML = gahviplay - tik1;
        ohh2.innerHTML = motiplay - tik2;
      }
      if (gap > "-1") {
        //$('#gap1m').text(gap - gap1min)
        gap1h.innerHTML = gap - gap1ho;
        ohh1.innerHTML = gahviplay - tik1;
        ohh2.innerHTML = motiplay - tik2;
      }
      if (gap < "-1") {
        //$('#gap1m').text(gap - gap1min)
        gap1h.innerHTML = gap - gap1ho;
        ohh1.innerHTML = gahviplay - tik1;
        ohh2.innerHTML = motiplay - tik2;
      }









      console.log(secsinhour2 + ' /3600000')

      console.log(gap - gap1ho + ' gap1ho')
      console.log(gap + ' gap')
      console.log(gap1ho + ' gap1ho')





    }, 1000);



    $('#searchlolnoob').click(function() {

      console.log("BUTTON")
    });
    $('#searchlolnoob2').click(function() {

      console.log("BUTTON2")
    });
    $('#searchlolnoob3').click(function() {
      loadVideo($('#chnlName').val());
      loadVideo2($('#chnlName2').val());
      setTimeout(
        function() {
          //do nothing
        }, 1000);
      location.href = 'http://mixerno.github.io/twittervslive.html?' + viiName + '?' + viiNam2e;

      console.log("BUTTON4")
    });




    function loadVideo(naemhe) {
      viiName = naemhe;
      setTimeout(
        function() {
          loadVideo3($('#chnlName').val());
        }, 5000);


    }
  });