setTimeout(function() {
    location.reload();
  }, 7200000);
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://corseverywheremiks.herokuapp.com/https://nobnabob.herokuapp.com/https://mixernob.herokuapp.com/https://mixernocors.herokuapp.com/' + options.url;
    }
  });
  var gahviplay = "0";
  $(document).ready(function() {


    var videostufflol = window.location.href;
    var params = videostufflol.split('?');
    var chanName = params[1]
    viiName = "";



    usernamelol(params[1]);




    function usernamelol(name) {

      chanName = params[1];
      $.ajax({
        url: 'https://gdbrowser.com/api/profile/' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.stars
          $('#viewcountodo').html(json.stars);
          $('#name').html(json.username);
          $('#diamonds').html(json.diamonds);
          $('#coins').html(json.coins);
          $('#userCoins').html(json.userCoins);
          $('#demons').html(json.demons);
          $('#image').html(json.cp);

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
      $.ajax({
        url: 'https://gdbrowser.com/api/profile/' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.stars;
          $('#viewcountodo').html(json.stars);
          $('#name').html(json.username);
          $('#diamonds').html(json.diamonds);
          $('#coins').html(json.coins);
          $('#userCoins').html(json.userCoins);
          $('#demons').html(json.demons);
          $('#image').html(json.cp);





        }
      });


    }, 2000);

    $('#searchlolnoob3').click(function() {
      loadVideo($('#chnlName').val());
      setTimeout(
        function() {
          //do nothing
        }, 1000);
      location.href = 'http://mixerno.github.io/gdstats.html?' + viiName;

      console.log("BUTTON4")
    });


  });
