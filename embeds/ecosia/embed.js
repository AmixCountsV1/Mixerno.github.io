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


    var parms = window.location.href;
    var params = parms.split('?');
    var fans2 = "0";


    usernamelol(params[1]);




    function usernamelol() {

      $.ajax({
        url: 'https://api.ecosia.org/v1/trees/count',
        // Handle as Text
        dataType: "text",
        success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name1.innerHTML = "Ecosia";
        fans1.innerHTML = json.count
        fans2 = json.count
        $("#img1").attr('src', `https://media-thumbs.golden.com/vcngKpanwfAtz0sWxoUnNrmZK8A=/200x200/smart/golden-storage-production.s3.amazonaws.com%2Ftopic_images%2F59054dbf8b30458985fbe28fe5a46c62.png`);
        
        
        }
        });
    }






    setInterval(function() {
      $.ajax({
        url: 'https://api.ecosia.org/v1/trees/count',
        // Handle as Text
        dataType: "text",
        success: function(data) {
        // Parse JSON file
        var json = $.parseJSON(data);
        //Store data into a variable
        // Display Players
        name1.innerHTML = "Ecosia";
        fans1.innerHTML = json.count
        fans2 = json.count
        $("#img1").attr('src', `https://media-thumbs.golden.com/vcngKpanwfAtz0sWxoUnNrmZK8A=/200x200/smart/golden-storage-production.s3.amazonaws.com%2Ftopic_images%2F59054dbf8b30458985fbe28fe5a46c62.png`);
        
        
        }
        });







    }, 2000);






  });
