let particles = [];

function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  background(20, 20, 40, 50); // 半透明背景
  particles.push({
    x: random(width),
    y: random(height),
    size: random(5, 20),
    color: color(random(100, 255), random(100, 255), random(200, 255), 150),
  });

  particles = particles.filter(p => p.size > 0.1);
  for (let p of particles) {
    fill(p.color);
    ellipse(p.x, p.y, p.size);
    p.size *= 0.95; // 慢慢缩小
  }
}
