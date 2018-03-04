'use strict';

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', () => {
  var ledArr = new five.Leds([2,3,4,5,6,7]);
  board.repl.inject({ leds: ledArr });
  ledArr.blink();
});

