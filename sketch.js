let particles = [];

function setup() {
  createCanvas(600, 600);
  noStroke();

  for (let i = 0; i < 300; i++) {
    particles.push(new Walker(random(width), random(height)));
  }
}

function draw() {
  background(20, 20, 40, 50);

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].checkEdges();

    let isColliding = false;

    
    for (let j = particles.length - 1; j >= 0; j--) {
      if (i !== j && particles[i].isTouching(particles[j])) {
        isColliding = true;
        particles.splice(j, 1); // Remove the other particle
        if (j < i) i--; // Adjust index to avoid skipping
      }
    }

    if (isColliding) {
      particles.splice(i, 1); // Remove current particle
    } else {
      particles[i].show();
    }
  }
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 20);
    this.color = color(random(100, 255), random(100, 255), random(200, 255), 150);
  }

  update() {
    this.x += random(-4, 4);
    this.y += random(-4, 4);
  }

  show() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  checkEdges() {
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  isTouching(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    return distance < (this.size + other.size) / 2;
  }
}

