/*<br>
<br>
<input type="button" id="whitee" value="White theme"/>
<input type="button" id="blackk" value="Black theme"/>
<input type="button" id="transparent1" value="Transparent background (white text)"/>
<input type="button" id="transparent2" value="Transparent background (black text)"/>*/
$(document).ready(function() {
    $('#whitee').click(function() {
        $('body').css('color', 'black');
        $('body').css('background-color', 'white');
        console.log("White theme activated")
      });
      $('#blackk').click(function() {
        $('body').css('color', 'white');
        $('body').css('background-color', 'black');
        console.log("Black theme activated")
      });
      $('#transparent1').click(function() {
        $('body').css('color', 'white');
        $('body').css('background-color', 'transparent');
        console.log("transparent1 activated")
      });
      $('#transparent2').click(function() {
        $('body').css('color', 'black');
        $('body').css('background-color', 'transparent');
        console.log("transparent2 activated")
      });
});