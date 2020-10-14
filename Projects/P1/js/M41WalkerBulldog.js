// A BEEFY TANK class

class M41WalkerBulldog {

  constructor(x, y, speed, fillColor, radius) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    // Time properties for noise() function
    this.tx = random(0, 1000);
    this.ty = random(0, 1000);
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    // Display properties
    this.fillColor = fillColor;
    this.radius = this.health;
  }

  chase(player) {
    // Sets the ratio at which the enemy's movement will slow down as it gets close to the spyguy
    this.speed = constrain(this.speed, 5, 20);
    this.movementEasing = map(this.speed, 0, 20, 0, 0.015);
    // Calculate distance between M41 Walker Bulldog position and the spyguy
    this.distToPlayerX = spyguy.x - this.x;
    this.distToPlayerY = spyguy.y - this.y;
    // Update position
    this.x += this.distToPlayerX * this.movementEasing;
    this.y += this.distToPlayerY * this.movementEasing;
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

  // display
  //
  display() {
    push();
    noStroke();
    this.radius = this.health;
    imageMode(CENTER)
    image(he, this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
  }


  reset() {
    // Random position
    this.x = random(0, width);
    this.y = random(0, height);
    // Default health
    this.health = this.maxHealth;
    // Default radius
    this.radius = this.health;
  }
}
