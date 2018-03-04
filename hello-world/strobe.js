var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // create an Led on pin 13
  var led = new five.Led(13);

  //Flash the pin on and off
  led.strobe();
});