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
      options.url = 'https://corseverywheremiks.herokuapp.com/' + options.url;
      setInterval(function() {
        var randomNumber = Math.floor(Math.random()*textArray.length);

        key = textArray[randomNumber];
      }, 1000);
      options.url = key + options.url;
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
    var goal1 = 10;
    var readygoal = "0";


    usernamelol(params[1]);
    loadVideo3("random lol nothing really :)");




    function usernamelol(name) {


      chanName = params[1];

      $.ajax({

        url: 'https://www.tiktok.com/node/share/user/@' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.body.userData.fans
          //$('#gahviplayerslol').html(json.body.userData.fans)
          readygap = readygap + "1"
          gap = json.body.userData.fans
          gahviplayerslol.innerHTML = json.body.userData.fans;
          tiktoker1.innerHTML = json.body.userData.nickName;
          $('#img1').html('<img src=\"' + json.body.userData.covers + '\">')
          likes2.innerHTML = json.body.userData.heart;
          fol.innerHTML = json.body.userData.following;
          vids.innerHTML = json.body.userData.video;
          readygoal + "11"



        }
      });
    }

var gool
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




    setInterval(function() {
      console.log(readygap)
      chanName = params[1];
      $.ajax({

        url: 'https://www.tiktok.com/node/share/user/@' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gap = json.body.userData.fans
          gahviplay = json.body.userData.fans
          //$('#gahviplayerslol').html(json.body.userData.fans)
          gahviplayerslol.innerHTML = json.body.userData.fans;
          likes2.innerHTML = json.body.userData.heart;
          tiktoker1.innerHTML = json.body.userData.nickName;
          fol.innerHTML = json.body.userData.following;
          vids.innerHTML = json.body.userData.video;








        }
      });







    }, 2000);
    setInterval(function() {
      stuff.series[0].addPoint([
        (new Date()).getTime(),
        gahviplay
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
        name: 'Fans',
        marker: {
          enabled: false
        },
        exporting: {
          enabled: false
        },

      }]
    })

    var estimad = 0;
    var fldls = 0;
    setInterval(function() {


      secsinhour = secsinhour + 1000
      if (secsinhour > 60000) {
        secsinhour = 0
        gap1min = gap
        fldls = gap - gap1min
        //$('#gap1m').text(gap - gap1min)
        gap1m.innerHTML = gap - gap1min;
      }
      if (gahviplay > "-1") {
        //$('#gap1m').text(gap - gap1min)
        gap1m.innerHTML = gap - gap1min;
        fldls = gap - gap1min
      }
      if (gahviplay < "-1") {
        //$('#gap1m').text(gap - gap1min)
        gap1m.innerHTML = gap - gap1min;
        fldls = gap - gap1min
      }









      console.log(secsinhour + ' /60000')




    }, 1000);

    setInterval(function() {


      secsinhour2 = secsinhour2 + 1000
      if (secsinhour2 > 3600000) {
        secsinhour2 = 0
        gap1ho = gap

        //$('#gap1m').text(gap - gap1min)
        gap1h.innerHTML = fldls * 60;
        estimad = fldls * 60
        est.innerHTML = estimad * 24;
      }
      if (gahviplay > "-1") {
        //$('#gap1m').text(gap - gap1min)
        gap1h.innerHTML = fldls * 60;
        estimad = fldls * 60
        est.innerHTML = estimad * 24;
      }
      if (gahviplay < "-1") {
        //$('#gap1m').text(gap - gap1min)
        gap1h.innerHTML = fldls * 60;
        estimad = fldls * 60
        est.innerHTML = estimad * 24;
      }









      console.log(secsinhour2 + ' /3600000')




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
      location.href = 'http://mixerno.github.io/tiktok.html?' + viiName;

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
