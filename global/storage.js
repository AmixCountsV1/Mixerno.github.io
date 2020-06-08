function saveStyles() {
    if(document.getElementById("styel").value == "s") {
        //non
        console.log("Ok2")
    } else {
        localStorage.setItem('style', document.getElementById("styel").value);
        console.log("Ok3")
    }
    if(document.getElementById("odospeed").value == "ss") {
        //non
        console.log("Ok4")
    } else {
        localStorage.setItem('odospeed', document.getElementById("odospeed").value);
        console.log("Ok5")
    }
    
  
    getStyles();
}

function getStyles() {
    console.log("Ok6")
    var stylecurrent = localStorage.getItem('style'); 
    var ododspeed = localStorage.getItem('odospeed'); 
    if(stylecurrent == "gw") {
        $('head').append('<link rel="stylesheet" type="text/css" href="../styles/gw.css');
    } else if (stylecurrent == "bw") {
        $('head').append('<link rel="stylesheet" type="text/css" href="../styles/bw.css');
    }
    else {
        $('head').append('<link rel="stylesheet" type="text/css" href="../styles/gw.css');
    }
    if(ododspeed == "s00") {
        $('head').append('<link rel="stylesheet" type="text/css" href="../odometerspeeds/s00.css');
    } else if (ododspeed == "s0") {
        $('head').append('<link rel="stylesheet" type="text/css" href="../styles/s0.css');
    } else if (ododspeed == "s1") {
        $('head').append('<link rel="stylesheet" type="text/css" href="../styles/s1.css');
    } else if (ododspeed == "s2") {
        $('head').append('<link rel="stylesheet" type="text/css" href="../styles/s2.css');
    } else if (ododspeed == "s3") {
        $('head').append('<link rel="stylesheet" type="text/css" href="../styles/s3.css');
    } else if (ododspeed == "s4") {
        $('head').append('<link rel="stylesheet" type="text/css" href="../styles/s4.css');
    }
    else {
        $('head').append('<link rel="stylesheet" type="text/css" href="../odometerspeeds/s2.css');
    }
}