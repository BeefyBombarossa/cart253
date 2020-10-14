//This is the player character. The SPY GUY

class Spymain {

  constructor(x, y, speed, fillColor, radius) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 2;
    // Display properties
    this.fillColor = fillColor;
    this.radius = this.health; // Radius is defined in terms of health
    // Input properties
    this.upKey = 87;
    this.downKey = 83;
    this.leftKey = 65;
    this.rightKey = 68;
  }

//Checks if key is pressed and sets Spymains velocity
  handleInput() {
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }
    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    }
    else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }
  }

  move() {
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Update health
    this.health = this.health - this.healthLossPerMove;
    this.health = constrain(this.health, 0, this.maxHealth);
    // Handle wrapping
    this.handleWrapping();
  }

  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }

  handleEating(intel) {
    // Calculate distance from this Spymain to the intel
    let d = dist(this.x, this.y, intel.x, intel.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < this.radius + intel.radius) {
      // Increase Spymain health and constrain it to its possible range
      this.health += this.healthGainPerEat;
      this.health = constrain(this.health, 0, this.maxHealth);
      // Decrease intel health by the same amount
      intel.health -= 6;
      // Check if the intel died and reset it if so
      if (intel.health < 0) {
        intelCollect = intelCollect + 1;
        intel.reset();
      }
    }
  }

  handleDamage(m41WalkerBulldog) {
    let d = dist(this.x, this.y, m41WalkerBulldog.x, m41WalkerBulldog.y);
    if (d < this.radius + m41WalkerBulldog.radius) {
      this.health -= 1;
    }
  }
  handleDamage(agent) {
    let d = dist(this.x, this.y, agent.x, agent.y);
    if (d < this.radius + m41WalkerBulldog.radius) {
      this.health -= 3;
    }
  }
  handleDamage(agent2) {
    let d = dist(this.x, this.y, agent2.x, agent2.y);
    if (d < this.radius + m41WalkerBulldog.radius) {
      this.health -= 3;
    }
  }

  display() {
    push();
    noStroke();
    this.radius = this.health;
    imageMode(CENTER)
    image(spoi,this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
  }
}
