//Agents

class Agent {

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
    this.health = this.maxHealth;
    // Display properties
    this.fillColor = fillColor;
    this.radius = this.health;

    //This will be the radius of the agent's vision
    this.visionRadius = 200;
    //Mr agent will chase the spy all over the place
    this.chasing = false;
    //Color determining the state of agent
    this.calm = color(211,211,211, 50);
    this.madlad = color(255, 0, 0, 50);
  }

  move() {

    if (this.chasing & !spyguy.hidden) {
      if(spyguy.x < this.x) {
        this.x -= 3.5;
      }
      else if(spyguy.x > this.x) {
        this.x += 3.5;
      }
        if(spyguy.y < this.y) {
          this.y -= 3.5;
        }
        else if(spyguy.y > this.y) {
          this.y += 3.5;
        }
      }
      else {
        // Set velocity via noise()
        this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
        this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
        // Update position
        this.x += this.vx;
        this.y += this.vy;
        // Update time properties
        this.tx += 0.01;
        this.ty += 0.01;
      }

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

  display() {
    push();

    noStroke();

    let d = dist(spyguy.x, spyguy.y, this.x, this.y)

    if (this.chasing) {
      fill(this.madlad);
    } else {
      fill(this.calm);
    }
    ellipse(this.x, this.y, this.visionRadius * 2);

    //display dude
    this.radius = this.health;
    imageMode(CENTER)
    image(py,this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
  }

  handleChasing() {

    let d = dist(spyguy.x, spyguy.y, this.x, this.y)

    if (d < this.visionRadius + spyguy.radius & !spyguy.hidden) {
      this.chasing = true;
    }

    else {
      this.chasing = false;
    }
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
