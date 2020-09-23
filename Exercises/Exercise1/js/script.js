/**************************************************
EX 1 I like ta move it
Gabriel Garces

Here is a description of this template p5 project.
**************************************************/

//Variable Thingy
let thon = 0;

// The current position and size of the circle
let circleX;
let circleY;
let circleSize = 80;

// The current position and size of the square
let squareX;
let squareY;
let squareSize = 65;

//Canvas On which the program shows its stuff -
function setup() {
  createCanvas(640, 640);

  // This starts the circle off screen to the bottom left
  circleX = -circleSize/2;
  circleY = height + circleSize/2;

  // Same deal with circle but instead a square at the bottom right
  squareX = 320;
  squareY = 0;

}

function draw() {

}
