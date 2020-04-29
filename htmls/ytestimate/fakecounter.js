setTimeout(function() {
    //location.reload();
  }, 7200000);
  var randomNumber = Math.floor(Math.random()*textArray.length);
  var stufflol = "";
  stufflol = textArray[randomNumber];
  var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
 
  var key = "";
  key = textArray[randomNumber]
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = '' + options.url;
      setInterval(function() {
        var randomNumber = Math.floor(Math.random()*textArray.length);

        key = textArray[randomNumber];
      }, 1000);
    }
  });
  var parms = window.location.href;
    var params = parms.split('?');
  $(document).ready(function() {
    $('#whitee').click(function() {
      $('body').css('color', 'black');
      $('body').css('background-color', 'white');
      console.log("White theme activated");
      location.href = `${params[0]}?${params[1]}?1?${params[3]}`;
    });
    $('#blackk').click(function() {
      $('body').css('color', 'white');
      $('body').css('background-color', 'black');
      console.log("Black theme activated");
      location.href = `${params[0]}?${params[1]}?2?${params[3]}`;
    });
    $('#transparent1').click(function() {
      $('body').css('color', 'white');
      $('body').css('background-color', 'transparent');
      console.log("transparent1 activated");
      location.href = `${params[0]}?${params[1]}?3?${params[3]}`;
    });
    $('#transparent2').click(function() {
      $('body').css('color', 'black');
      $('body').css('background-color', 'transparent');
      console.log("transparent2 activated");
      location.href = `${params[0]}?${params[1]}?4?${params[3]}`;
    });
    
    var stuff = new Highcharts.chart('container', {
      chart: {
        backgroundColor: 'transparent',
        renderTo: container,
        type: 'spline'
      },
      title: {
        text: `Follower graph`,
        style: {
          color: '#1E90FF',
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

    
    var fans2 = 0;
    fans2 = params[2] / 1;
    name1.innerHTML = params[1]
    var howmuchmins = 0;
    howmuchmins = params[4] / 60;
    var howmuch = 0;
    howmuch = howmuchmins / 60
    console.log(howmuch)
    var randomNumberforsubs = Math.floor(Math.random() * 10);
    var chanelid = "no";
    usernamelol(params[1]);
    




    function usernamelol() {
      randomNumberforsubs = Math.floor(Math.random() * 10);
      console.log(howmuch)
      console.log(randomNumberforsubs)
      console.log(fans2)
      
      if(randomNumberforsubs > 8.2) {
        if(randomNumberforsubs < 9.2) {
          fans2 = fans2 - howmuch
          fans2 = fans2 - howmuch
        setTimeout(function() {
          fans2 = fans2 + howmuch
          fans2 = fans2 + howmuch
        }, 2000);
        }
        if(randomNumberforsubs < 8.2) {
          fans2 = fans2 - howmuch
        setTimeout(function() {
          fans2 = fans2 + howmuch
        }, 2000);
        }
        
      }
      if(randomNumberforsubs < 8.2) {
        if(randomNumberforsubs < 2) {
          fans2 = fans2 + howmuch
          fans2 = fans2 + howmuch
          setTimeout(function() {
            fans2 = fans2 - howmuch
          }, 2000);
        } 
        else {
          fans2 = fans2 + howmuch
        }
        
      }

      fans1.innerHTML = Math.floor(fans2)
      stuff.series[0].addPoint([
        (new Date()).getTime(),
        Math.floor(fans2)
      ]);
    
      if (stuff.series[0].data.length >= 700) {
      stuff.series[0].data[0].remove()
    }
    
    if(fans2 > 10) {
      if(fans2 > 20) {
        if(fans2 > 30) {
          if(fans2 > 40) {
            if(fans2 > 50) {
              if(fans2 > 60) {
                if(fans2 > 70) {
                  if(fans2 > 80) {
                    if(fans2 > 90) {
                      if(fans2 > 100) {
                        if(fans2 > 200) {
                          if(fans2 > 300) {
                            if(fans2 > 400) {
                              if(fans2 > 500) {
                                if(fans2 > 600) {
                                  if(fans2 > 700) {
                                    if(fans2 > 800) {
                                      if(fans2 > 900) {
                                        if(fans2 > 1000) {
                                          if(fans2 > 2000) {
                                            if(fans2 > 3000) {
                                              if(fans2 > 4000) {
                                                if(fans2 > 5000) {
                                                  if(fans2 > 6000) {
                                                    if(fans2 > 7000) {
                                                      if(fans2 > 8000) {
                                                        if(fans2 > 9000) {
                                                          if(fans2 > 10000) {
                                                            if(fans2 > 20000) {
                                                              if(fans2 > 30000) {
                                                                if(fans2 > 40000) {
                                                                  if(fans2 > 50000) {
                                                                    if(fans2 > 60000) {
                                                                      if(fans2 > 70000) {
                                                                        if(fans2 > 80000) {
                                                                          if(fans2 > 90000) {
                                                                            if(fans2 > 100000) {
                                                                              if(fans2 > 200000) {
                                                                                if(fans2 > 300000) {
                                                                                  if(fans2 > 400000) {
                                                                                    if(fans2 > 500000) {
                                                                                      if(fans2 > 600000) {
                                                                                        if(fans2 > 700000) {
                                                                                          if(fans2 > 800000) {
                                                                                            if(fans2 > 900000) {
                                                                                              if(fans2 > 1000000) {
                                                                                                if(fans2 > 2000000) {
                                                                                                  if(fans2 > 3000000) {
                                                                                                    if(fans2 > 4000000) {
                                                                                                      if(fans2 > 5000000) {
                                                                                                        if(fans2 > 6000000) {
                                                                                                          if(fans2 > 7000000) {
                                                                                                            if(fans2 > 8000000) {
                                                                                                              if(fans2 > 9000000) {
                                                                                                                if(fans2 > 10000000) {
                                                                                                                  if(fans2 > 20000000) {
                                                                                                                    if(fans2 > 30000000) {
                                                                                                                      if(fans2 > 40000000) {
                                                                                                                        if(fans2 > 50000000) {
                                                                                                                          if(fans2 > 60000000) {
                                                                                                                            if(fans2 > 70000000) {
                                                                                                                              if(fans2 > 80000000) {
                                                                                                                                if(fans2 > 90000000) {
                                                                                                                                  if(fans2 > 100000000) {
                                                                                                                                    return;
                                                                                                                                  } else {
                                                                                                                                    goaal.innerHTML = Math.floor(100000000 - fans2)
                                                                                                                                  }
                                                                                                                                } else {
                                                                                                                                  goaal.innerHTML = Math.floor(90000000 - fans2)
                                                                                                                                }
                                                                                                                              } else {
                                                                                                                                goaal.innerHTML = Math.floor(80000000 - fans2)
                                                                                                                              }
                                                                                                                            } else {
                                                                                                                              goaal.innerHTML = Math.floor(70000000 - fans2)
                                                                                                                            }
                                                                                                                          } else {
                                                                                                                            goaal.innerHTML = Math.floor(60000000 - fans2)
                                                                                                                          }
                                                                                                                        } else {
                                                                                                                          goaal.innerHTML = Math.floor(50000000 - fans2)
                                                                                                                        }
                                                                                                                      } else {
                                                                                                                        goaal.innerHTML = Math.floor(40000000 - fans2)
                                                                                                                      }
                                                                                                                    } else {
                                                                                                                      goaal.innerHTML = Math.floor(30000000 - fans2)
                                                                                                                    }
                                                                                                                  } else {
                                                                                                                    goaal.innerHTML = Math.floor(20000000 - fans2)
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  goaal.innerHTML = Math.floor(10000000 - fans2)
                                                                                                                }
                                                                                                              } else {
                                                                                                                goaal.innerHTML = Math.floor(9000000 - fans2)
                                                                                                              }
                                                                                                            } else {
                                                                                                              goaal.innerHTML = Math.floor(8000000 - fans2)
                                                                                                            }
                                                                                                          } else {
                                                                                                            goaal.innerHTML = Math.floor(7000000 - fans2)
                                                                                                          }
                                                                                                        } else {
                                                                                                          goaal.innerHTML = Math.floor(6000000 - fans2)
                                                                                                        }
                                                                                                      } else {
                                                                                                        goaal.innerHTML = Math.floor(5000000 - fans2)
                                                                                                      }
                                                                                                    } else {
                                                                                                      goaal.innerHTML = Math.floor(4000000 - fans2)
                                                                                                    }
                                                                                                  } else {
                                                                                                    goaal.innerHTML = Math.floor(3000000 - fans2)
                                                                                                  }
                                                                                                } else {
                                                                                                  goaal.innerHTML = Math.floor(2000000 - fans2)
                                                                                                }
                                                                                              } else {
                                                                                                goaal.innerHTML = Math.floor(1000000 - fans2)
                                                                                              }
                                                                                            } else {
                                                                                              goaal.innerHTML = Math.floor(900000 - fans2)
                                                                                            }
                                                                                          } else {
                                                                                            goaal.innerHTML = Math.floor(800000 - fans2)
                                                                                          }
                                                                                        } else {
                                                                                          goaal.innerHTML = Math.floor(700000 - fans2)
                                                                                        }
                                                                                      } else {
                                                                                        goaal.innerHTML = Math.floor(600000 - fans2)
                                                                                      }
                                                                                    } else {
                                                                                      goaal.innerHTML = Math.floor(500000 - fans2)
                                                                                    }
                                                                                  } else {
                                                                                    goaal.innerHTML = Math.floor(400000 - fans2)
                                                                                  }
                                                                                } else {
                                                                                  goaal.innerHTML = Math.floor(300000 - fans2)
                                                                                }
                                                                              } else {
                                                                                goaal.innerHTML = Math.floor(200000 - fans2)
                                                                              }
                                                                            } else {
                                                                              goaal.innerHTML = Math.floor(100000 - fans2)
                                                                            }
                                                                          } else {
                                                                            goaal.innerHTML = Math.floor(90000 - fans2)
                                                                          }
                                                                        } else {
                                                                          goaal.innerHTML = Math.floor(80000 - fans2)
                                                                        }
                                                                      } else {
                                                                        goaal.innerHTML = Math.floor(70000 - fans2)
                                                                      }
                                                                    } else {
                                                                      goaal.innerHTML = Math.floor(60000 - fans2)
                                                                    }
                                                                  } else {
                                                                    goaal.innerHTML = Math.floor(50000 - fans2)
                                                                  }
                                                                } else {
                                                                  goaal.innerHTML = Math.floor(40000 - fans2)
                                                                }
                                                              } else {
                                                                goaal.innerHTML = Math.floor(30000 - fans2)
                                                              }
                                                            } else {
                                                              goaal.innerHTML = Math.floor(20000 - fans2)
                                                            }
                                                          } else {
                                                            goaal.innerHTML = Math.floor(10000 - fans2)
                                                          }
                                                        } else {
                                                          goaal.innerHTML = Math.floor(9000 - fans2)
                                                        }
                                                      } else {
                                                        goaal.innerHTML = Math.floor(8000 - fans2)
                                                      }
                                                    } else {
                                                      goaal.innerHTML = Math.floor(7000 - fans2)
                                                    }
                                                  } else {
                                                    goaal.innerHTML = Math.floor(6000 - fans2)
                                                  }
                                                } else {
                                                  goaal.innerHTML = Math.floor(5000 - fans2)
                                                }
                                              } else {
                                                goaal.innerHTML = Math.floor(4000 - fans2)
                                              }
                                            } else {
                                              goaal.innerHTML = Math.floor(3000 - fans2)
                                            }
                                          } else {
                                            goaal.innerHTML = Math.floor(2000 - fans2)
                                          }
                                        } else {
                                          goaal.innerHTML = Math.floor(1000 - fans2)
                                        }
                                      } else {
                                        goaal.innerHTML = Math.floor(900 - fans2)
                                      }
                                    } else {
                                      goaal.innerHTML = Math.floor(800 - fans2)
                                    }
                                  } else {
                                    goaal.innerHTML = Math.floor(700 - fans2)
                                  }
                                } else {
                                  goaal.innerHTML = Math.floor(600 - fans2)
                                }
                              } else {
                                goaal.innerHTML = Math.floor(500 - fans2)
                              }
                            } else {
                              goaal.innerHTML = Math.floor(400 - fans2)
                            }
                          } else {
                            goaal.innerHTML = Math.floor(300 - fans2)
                          }
                        } else {
                          goaal.innerHTML = Math.floor(200 - fans2)
                        }
                      } else {
                        goaal.innerHTML = Math.floor(100 - fans2)
                      }
                    } else {
                      goaal.innerHTML = Math.floor(90 - fans2)
                    }
                  } else {
                    goaal.innerHTML = Math.floor(80 - fans2)
                  }
                } else {
                  goaal.innerHTML = Math.floor(70 - fans2)
                }
              } else {
                goaal.innerHTML = Math.floor(60 - fans2)
              } 
            } else {
              goaal.innerHTML = Math.floor(50 - fans2)
            }
          } else {
            goaal.innerHTML = Math.floor(40 - fans2)
          }
        } else {
          goaal.innerHTML = Math.floor(30 - fans2)
        }
      } else {
        goaal.innerHTML = Math.floor(20 - fans2)
      }
    } else {
      goaal.innerHTML = Math.floor(10 - fans2)
    }

    }






    setInterval(usernamelol, 2000)






  });
  if(params[3] == 1) {
    $('body').css('color', 'black');
    $('body').css('background-color', 'white');
    console.log("White theme activated")
  }
  if(params[3] == 2) {
  
    $('body').css('color', 'white');
    $('body').css('background-color', 'black');
    console.log("Black theme activated")
  
  }
  if(params[3] == 3) {
  
    $('body').css('color', 'white');
    $('body').css('background-color', 'transparent');
    console.log("transparent1 activated")
  
  }
  if(params[3] == 4) {
  
    $('body').css('color', 'black');
    $('body').css('background-color', 'transparent');
    console.log("transparent2 activated")
  
  }
