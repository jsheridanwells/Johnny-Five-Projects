// get johnny five
let five = require("johnny-five");
// get system sleep 
let sleep = require("system-sleep");

let board = new five.Board();

// run program on connected Arduino
board.on("ready", () => {
  let leds = setLeds(2, 7);
  let button = new five.Button(8);
  button.on('press', () => leds.forEach(led => onAndWait(led)));
});

// creates an array of leds with pin assigned
// leds must be in order from first to last`
const setLeds = (first, last) => {
  let arr = [];
  for (let i = first; i <= last; i++) {
    let led = new five.Led(i);
    arr.push(led);
  }
  return arr;
};

// turns on an led, waits 5 minutes, then turns it off
// passed into forEach method on array of leds, turns each one
// on and off individually
const onAndWait = (thisLed) => {
  thisLed.on();
  sleep(minutes(5));
  thisLed.off();
};

// converts minutes to milliseconds
// so sleep() method is more readable
const minutes = mins => mins * 60000;
