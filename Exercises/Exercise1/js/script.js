/**************************************************
EX 1 I like ta move it
Gabriel Garces

This is the exercise project where we move stuff
This code might look complicated and awesome but the result is a lot less exciting than what you might xD
Btw, are you reading this Pippin?
**************************************************/

//Variable Thingy
let thon = 25;

// The current position and size of the circle
let circleX;
let circleY;
let circleSize = 80;

// The current position and size of the square
let squareX;
let squareY;
let squareSize = 65;

//Defines starting point of image
let imgX = 0;
let imgY = 320;

//Loads in the image thing
function preload() {
img = loadImage('moose.jpg');
}

//Canvas and starting positions for first circle and rectangle
function setup() {
  createCanvas(640, 640);

  // This starts the circle off screen to the bottom left
  circleX = -circleSize/2;
  circleY = height + circleSize/2;

  // Same deal with circle but instead a square at the bottom right
  squareX = 320;
  squareY = 0;

//This makes sure that the Square will be centered on the mouse
rectMode(CENTER)
}

function draw() {
//Added thon variable to convert it with map
  thon = map(mouseX, 0, 500, 0, 255);
  background(thon);

//Constraints the ellipse thats attached to the mouse
  let xc = constrain(mouseX, 100, 500);

//Shapes that will follow the mouse around
  noStroke();
  fill(thon + 200, 160, 120);
  ellipse(xc, mouseY, 75, 75);

  fill(thon + 250, 300, 200);
  rect(xc, mouseY, 50, 50);

  // Moves the circle up and to the right
  circleX += 1;
  circleY -= 1;
  // Makes the circle transparent red
  fill(255,0,0);
  // Displays the circle
  ellipse(circleX,circleY,circleSize,circleSize);

  //Makes a square go down from the center
  squareY = squareY + 1;
  //Makes the square transparent blue
  fill(0,0,255);
  // Displays the square
  rect(squareX,squareY,squareSize,squareSize);

//Makes the image move to the right
  imgX = imgX + 1;
//Image (Kind of obvious though)
  image(img, imgX, imgY, 180, 180);
}
