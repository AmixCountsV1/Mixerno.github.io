//yes i have very good naming for these files.
setTimeout(function() {
    //location.reload();
  }, 7200000);
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://corseverywheremiks.herokuapp.com/https://nobnabob.herokuapp.com/https://mixernob.herokuapp.com/https://mixernocors.herokuapp.com/' + options.url;
    }
  });
  var gahviplay = "0";
  var us2 = "0";
  $(document).ready(function() {


    var videostufflol = window.location.href;
    var params = videostufflol.split('?');
    var chanName = params[1]
    var chanName2 = params[2]
    viiName = "";



    usernamelol(params[1]);
    usernamelol2(params[2]);




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
          gahviplay = json.likes
          $('#usr1').html(json.likes);
          $('#name1').html(json.name);
          $('#authorname').html(json.author);
          $('#authid').html(json.accountID);

        }
      });

    }
    function usernamelol2(name) {

      chanName2 = params[2];
      $.ajax({
        url: 'https://gdbrowser.com/api/level/' + chanName2,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          us2 = json.likes
          $('#usr2').html(json.likes);
          $('#name2').html(json.name);
          $('#authorname2').html(json.author);
          $('#authid2').html(json.accountID);

        }
      });

    }
    difodo.innerHTML = gahviplay - us2

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
          gahviplay = json.likes
          $('#usr1').html(json.likes);
          $('#name1').html(json.name);
          $('#authorname').html(json.author);
          $('#authid').html(json.accountID);

        }
      });
      chanName2 = params[2];
      $.ajax({
        url: 'https://gdbrowser.com/api/level/' + chanName2,
        // Handle as Text
        dataType: "text",
        success: function(data) {
          // Parse JSON file
          var json = $.parseJSON(data);
          //Store data into a variable
          // Display Players
          us2 = json.likes
          $('#usr2').html(json.likes);
          $('#name2').html(json.name);
          $('#authorname2').html(json.author);
          $('#authid2').html(json.accountID);

        }
      });
      difodo.innerHTML = gahviplay - us2


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
