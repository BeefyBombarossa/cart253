// Cold Spy Simulation Gameation
// by Gabriel Garces

// Player guy
let spyguy;

// intel
let iNtel;
let intelCollect = 0

//tank
let m41WalkerBulldog;

//agents
let agent;
let agent2;

//Variable for start screen
let started = false;

let gameIsOver = false;

//Arrays for number of intel that are going to be present
let numIntel = 7; // Max num of intel to spawn
let intel = []; // An empty array to store them in

let numAgents = 3;

//Intel
let sc
//Player
let spoi
//Tank
let he
//Agent
let py
//agent2
let py2
//Game Over
let go
//Background Music
let musik
let end

function preload() {
  musik = loadSound('assets/sounds/One.mp3');
  end = loadSound('assets/sounds/end.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  setupSound();

  sc = loadImage('assets/images/intel.png');
  spoi = loadImage('assets/images/spyguy.png');
  he = loadImage('assets/images/M41 Walker Bulldog.png');
  py = loadImage('assets/images/agent.png');
  py2 = loadImage('assets/images/agent.png');
  go = loadImage('assets/images/over.jpg');

  spyguy = new Spymain(width / 2, height / 2, 5, color(255,0,0), 50);
  m41WalkerBulldog = new M41WalkerBulldog(100, 100, 5, color(127), 80);
  agent = new Agent(100, 100, 8, color(255, 255, 0), 30);
  agent2 = new Agent2(100, 100, 8, color(255, 255, 0), 30);


  for (let i = 0; i < numIntel; i++) {
    // Generates random values for the arguments of the Intel
    let intelX = random(0, width);
    let intelY = random(0, height);
    let intelSpeed = random(11,15);
    let intelColor = color(255);
    let intelRadius = 40;
    // Creates new Intel objects with the random values
    let newIntel = new Intel(intelX, intelY, intelSpeed, intelColor, intelRadius);
    // Adds the new Intel object to the END of the array
    intel.push(newIntel);
  }
}
//Sets up music
function setupSound() {
  musik.setVolume(0.3);
  end.setVolume(0.3);
}

//Pressing the mouse value
function mousePressed() {
  started = true;
}

//Displays game over screen
function gameOverScreen() {
  musik.stop();
  if (!end.isPlaying()) end.play();

  background(255, 50, 50);

  push();
  textSize(60);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height * 0.4);
  text("You collected " + intelCollect + " pieces of Intel",width / 2, height * 0.2)
  textSize(40);
  text("Reload the page to try again")
}


function draw() {
  //Start screen
  if (!started) {
    background(227)
    textSize(40);
    textAlign(CENTER, CENTER);
    textFont("Impact");
    text("Click your mouse to begin", width / 2, height / 2);
    textAlign(CENTER,CENTER);
    textSize(30);
    text("Use WASD to move",width / 2, height/7);
    textAlign(CENTER,CENTER);
    text("Your objective is to collect as much intel as you can", width / 2, height / 4);
    text("But be careful, theres an M41 Walker Bulldog and two agents trying to track you down", width / 2, height / 3);
    text("You are an undercover spy called Tachanka",width / 2, height/5);
    }
    else {
//Game Begins
  background(0,0,0);
  if (!musik.isPlaying()) musik.play();


for (let i = 0; i < intel.length; i++) {
  intel[i].move();
  intel[i].display();
  spyguy.handleEating(intel[i]);
}

  spyguy.handleDamage(m41WalkerBulldog);
  spyguy.handleDamage(agent);
  spyguy.handleDamage(agent2);
  // Handle input for the spyguy
  spyguy.handleInput();

  // Move the objects
  spyguy.move();
  m41WalkerBulldog.chase();
  agent.move();
  agent.handleChasing(spyguy)
  agent2.move();
  agent2.handleChasing(spyguy)

  //Displays all objects
  spyguy.display();
  m41WalkerBulldog.display();
  agent.display();
  agent2.display();
  }

//Ends the game
  if (spyguy.health < 2) {
      gameIsOver = true;
    }

  if (gameIsOver) {
      gameOverScreen();
    }
}
