setTimeout(function() {
    //location.reload();
  }, 7200000);
  var corsurl = "https://corseverywheremiks.herokuapp.com/" //required works only in mixerno.github.io/ | Sorry.
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = corsurl + options.url;
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
    loadVideo2("random lol nothing really :)");




    function usernamelol(name) {


      chanName = params[1];

      $.ajax({

        url: 'https://blastup.com/instagram/info?username=' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.data.followers //varialble followers.
          gap = json.data.followers
          tiktoker1.innerHTML = json.data.username //Username name
          gahviplayerslol.innerHTML = json.data.followers //followers
          likes1.innerHTML = json.data.following //following
          likes2.innerHTML = json.data.total_posts //media
          $('#img1').html('<img src=\"' + json.data.profile_picture + '\">') //img
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

    function loadVideo2(namehe) {

      viiNam2e = namehe;



    }
    if (readygap > 010) {
      gap1min = gap
    }



    setInterval(function() {
      console.log(readygap)
      chanName = params[1];
      $.ajax({

        url: 'https://blastup.com/instagram/info?username=' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.data.followers
          gap = json.data.followers
           //varialble followers.
          tiktoker1.innerHTML = json.data.username //Username name
          gahviplayerslol.innerHTML = json.data.followers //followers
          likes1.innerHTML = json.data.following //following
          likes2.innerHTML = json.data.total_posts //media
        }
      });
      gahviplay = gahviplay.replace(",", "");
      gahviplay = gahviplay.replace(",", "");
      gap = gap.replace(",", "");
      gap = gap.replace(",", "");






    }, 2000);

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
      location.href = 'http://mixerno.github.io/instagram.html?' + viiName;

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