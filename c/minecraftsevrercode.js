//setTimeout(function() {
    //location.reload();
  //}, 7200000);
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
var playerscount = 0;
var secsinhour = "60000";
var secsinhour2 = "3600000";
var secsinhour3 = "86400000";
var play1h = "0";
var play1day = "0";
var play1min = "0";
var videostufflol = window.location.href;
var params = videostufflol.split('?');
var chanName = params[1]
viiName = "";


usernamelol(params[1]);




function usernamelol(name) {

chanName = name;
$.ajax({
url: 'https://mcapi.xdefcon.com/server/' + chanName + '/full/json',
// Handle as Text
dataType: "text",
success: function(data) {
// Parse JSON file
var json = $.parseJSON(data);
//Store data into a variable
// Display Players
playerscount = json.players;
play1min = json.players;
play1h = json.players;
play1day = json.players;
viewcountodo.innerHTML = json.players
name.innerHTML = json.serverip
diamonds.innerHTML = json.maxplayers
coins.innerHTML = json.serverStatus
userCoins.innerHTML = json.ping
demons.innerHTML = json.protocol
image.innerHTML = '<img src=\"' + json.icon + '\">'

}
});

function loadVideo(naemhe) {
viiName = naemhe;
setTimeout(
function() {
loadVideo3($('#chnlName').val());
}, 5000);


}



setInterval(function() {

$.ajax({
url: 'https://mcapi.xdefcon.com/server/' + chanName + '/full/json',
// Handle as Text
dataType: "text",
success: function(data) {
// Parse JSON file
var json = $.parseJSON(data);
//Store data into a variable
// Display Players
playerscount = json.players;
viewcountodo.innerHTML = json.players
name.innerHTML = json.serverip
diamonds.innerHTML = json.maxplayers
coins.innerHTML = json.serverStatus
userCoins.innerHTML = json.ping
demons.innerHTML = json.protocol
image.innerHTML = '<img src=\"' + json.icon + '\">'


}
});



}, 2000);
var points = 0;
setTimeout(function() {
setInterval(function() {
stuff.series[0].addPoint([
(new Date()).getTime(),
playerscount
]);
if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
console.log(points)
}, 2000);
}, 4000);

var stuff = new Highcharts.chart('container', {
chart: {
backgroundColor: 'transparent',
renderTo: $('#container'),
type: 'line'

},
title: {
text: ''
},
boost: {
useGPUTranslations: true
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
name: 'Players',
marker: {
enabled: false
}
}]
})

var estimad = 0;
var fldls = 0;
setInterval(function() {


secsinhour = secsinhour + 1000
if (secsinhour > 60000) {
secsinhour = 0
play1min = playerscount
fldls = playerscount - play1min
//$('#gap1m').text(gap - gap1min)
gap1m.innerHTML = playerscount - play1min;
}
if (playerscount > "-1") {
//$('#gap1m').text(gap - gap1min)
gap1m.innerHTML = playerscount - play1min;
fldls = playerscount - play1min
}
if (playerscount < "-1") {
//$('#gap1m').text(gap - gap1min)
gap1m.innerHTML = playerscount - play1min;
fldls = playerscount - play1min
}









console.log(secsinhour + ' /60000')




}, 1000);

setInterval(function() {


secsinhour2 = secsinhour2 + 1000
if (secsinhour2 > 3600000) {
secsinhour2 = 0

//$('#gap1m').text(gap - gap1min)
gap1h.innerHTML = fldls * 60;
estimad = fldls * 60
est.innerHTML = estimad * 24;
}
if (playerscount > "-1") {
//$('#gap1m').text(gap - gap1min)
gap1h.innerHTML = fldls * 60;
estimad = fldls * 60
est.innerHTML = estimad * 24;
}
if (playerscount < "-1") {
//$('#gap1m').text(gap - gap1min)
gap1h.innerHTML = fldls * 60;
estimad = fldls * 60
est.innerHTML = estimad * 24;
}









console.log(secsinhour2 + ' /3600000')




}, 1000);

}





$('#searchlolnoob3').click(function() {
loadVideo($('#chnlName').val());
setTimeout(
function() {
//do nothing
}, 1000);
location.href = 'http://mixerno.github.io/minecraftsevrer.html?' + viiName;

console.log("BUTTON4")
});