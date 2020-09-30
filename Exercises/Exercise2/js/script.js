/**************************************************
Exercise 02: Dodge-em
Gabriel Garces
Hey Pippin, how you doing?
Hopefully you're well
You might be wondering what I'm typing here?
Welp... Not even I know
Also I forgot to commit my first thing stating that I started the project
Whoops....
**************************************************/

//This is the Rambovirus, he hates hats
let rambo19
//NGL, This guy here is kind of a loser. (Mr. Topphat code)
let topphat

function preload() {


// Creation of le Canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

//Spawn point for Rumbo
  rambo19.y = random(0, height);
  rambo19.vx = rambo19.speed;

}

// Creating Background and stuff
function draw() {
