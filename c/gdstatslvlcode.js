//yes i have very good naming for these files.
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
        url: 'https://gdbrowser.com/api/level/' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.downloads;
          naame.innerHTML = json.name
          authore.innerHTML = json.author
          authoreid.innerHTML = json.accountID
          id.innerHTML = json.id
          down.innerHTML = json.downloads
          likes.innerHTML = json.likes
          stars.innerHTML = json.stars
          orbs.innerHTML = json.orbs
          diamonds.innerHTML = json.diamonds
          gameVersion.innerHTML = json.gameVersion

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
        url: 'https://gdbrowser.com/api/level/' + chanName,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          gahviplay = json.downloads;
          naame.innerHTML = json.name
          authore.innerHTML = json.author
          authoreid.innerHTML = json.accountID
          id.innerHTML = json.id
          down.innerHTML = json.downloads
          likes.innerHTML = json.likes
          stars.innerHTML = json.stars
          orbs.innerHTML = json.orbs
          diamonds.innerHTML = json.diamonds
          gameVersion.innerHTML = json.gameVersion





        }
      });


    }, 2000);

    $('#searchlolnoob3').click(function() {
      loadVideo($('#chnlName').val());
      setTimeout(
        function() {
          //do nothing
        }, 1000);
      location.href = 'http://mixerno.github.io/gdstatslvl.html?' + viiName;

      console.log("BUTTON4")
    });


  });
