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
let rambo19 = {
  x: 0,
  y: 250,
  w: 200,
  h: 150,
  vx: 0,
  vy: 0,
  speed: 20,
}

//NGL, This guy here is kind of a loser. (Mr. Topphat code)
let topphat = {
  x: 200,
  y: 200,
  w: 100,
  h: 100,
}

//Background stuff. I really put a lot of effort into it, TRUST ME
let treeman;
let y = 0;

let youDied = false;

let f;

let coffin;

//Loading of the Thiccc ASSets
function preload() {
  rambo19.image = loadImage("assets/images/Rambo.png");
  topphat.image = loadImage("assets/images/Boi.png");
  treeman = loadImage("assets/images/yeh.png");
  f = loadImage("assets/images/F.jpg");
  soundFormats('mp3');
  coffin = loadSound('assets/sounds/F2');
}
//
// Creation of le Canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

//Spawn point for Rumbo
  rambo19.y = random(0, height);
  rambo19.vx = rambo19.speed;
  noCursor();
}

// Creating Background and stuff
function draw() {
  background(treeman);

  stroke(226, 204, 0);
  line(0, y, width, y);
  y++;
  if (y > height) {
    y = 0;
  }
//Show Rombo
  image(rambo19.image, rambo19.x, rambo19.y, rambo19.w, rambo19.h);

//Show Mr.Topphat
  image(topphat.image, topphat.x, topphat.y, topphat.w, topphat.h);

//This is how Romba moves
  noStroke();
  rambo19.x += rambo19.vx;
  rambo19.y += rambo19.vy;
  if (rambo19.x > width) {
    rambo19.x = 0;
    rambo19.y = random(0, height);
  }

//Mouse hat code for following mouse
  topphat.x = mouseX;
  topphat.y = mouseY;

//Oh no, with this code Rumba kills the hat guy
//(WOW this took me AGES to figure out, and only because Im a dum dum)
  let d = dist(topphat.x, topphat.y, rambo19.x, rambo19.y);
  if (d < rambo19.w / 2 + topphat.w / 2) {
    noLoop();
    youDied = true;
  }

  if (youDied) {
    // Gameover screen and fonts
    background(f)
    textFont("Helvetica");
    textSize(100);
    strokeWeight(4);
    stroke(255);
    textAlign(CENTER,CENTER);
    fill(0,0,0);

//Game Over Text
    text("Only god can save you now",width/2,height/2);
    coffin.play();
    }

}
