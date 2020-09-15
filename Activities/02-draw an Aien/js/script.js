/**************************************************
Activity 2
Gabriel Garces

Here is the code for the alien guy
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(640,480);
background(255,192,203);
noStroke();

// Body Boi
fill(120);
ellipse(320, 480, 500, 300);

//Henry Head
fill(130);
ellipse(320, 210, 300, 400);

//Billie EYES
fill(0);
ellipse(250, 210, 100, 250);
ellipse(390, 210, 100, 250);

//I really don't want to give my alien dude nostrils....
fill(0);
ellipse(330, 300, 5, 5);
ellipse(310, 300, 5, 5);

//Mouth Man
stroke(110);
strokeWeight(5);
rectMode(CENTER);
rect(320, 370, 50, 10);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
