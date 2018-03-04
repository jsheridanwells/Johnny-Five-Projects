# Johnny Five Projects Repo

This is a repo for storing sketches and notes for electronics projects built with [Arduino](https://www.arduino.cc/) and [Johnny Five](http://johnny-five.io/).

## Setup

You will need to run a standard firmata on your Arduino board for it to run johnny-five scripts.
[Follow these instructions](https://github.com/rwaldron/johnny-five/wiki/Getting-Started).

To build johnny-five scripts:

1. Clone this repo: `$ git clone git@github.com:jsheridanwells/Johnny-Five-Projects.git`.
2. For each project that you want to build, navigate to a directory that interests you: `$ cd hello-world`(for example).
3. Install node modules: `$ npm install`. This will install a copy of johnny-five and any other dependencies for that project.
4. There is a very basic description of the project in the package.json description, and for more elaborate setups I might include a Fritzing diagram.
5. To run the johnny-five script, connect an Arduino to your port of choice and run: `$ node [project-file.js]`.

__Contents:__

1. [Hello World](https://github.com/jsheridanwells/Johnny-Five-Projects/tree/master/hello-world)
2. [Hour Glass](https://github.com/jsheridanwells/Johnny-Five-Projects/tree/master/hour-glass)
