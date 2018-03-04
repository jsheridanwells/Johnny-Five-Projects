'use strict';
let five = require('johnny-five');

let board = new five.Board();

board.on('ready', () => {
  let tilt = new five.Switch(13);
  let first = 2;
  let last = 8;
  let leds = assignLeds(first, last);
  let prevTime = 0;
  let currentTime = board.millis();  
  let interval = 600000;
  let tiltState = 0;
  let prevTiltState = 0;

  if ((currentTime - prevTime) > interval) {
    prevTime = currentTime;
    leds[first].on();
    first++
    if (first === last +1) {
      leds.forEach(led => led.off());
    }
  } 

  tiltState = board.digitalRead(13, val => val);

  if (tiltState !== prevTiltState){
    ledsOff(leds);
    first = 2;
  }

  prevTiltState = tiltState;
  
});

const assignLeds = (first, last) => {
  let arr = [];
  for (let i = first; i <= last; i++){
    arr.push(new five.Led(i));
  }
  return arr;
};

const ledsOff = (ledArr) => ledArr.forEach(led => led.off());
