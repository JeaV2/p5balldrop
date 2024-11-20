let canvasWidth = 1280;
let canvasHeight = 566;
let i = 0;
let floorHeight = canvasHeight - 100;
let bounce = false;
let velocity = 0;
let gravity = 0.5;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function dropBall() {
  i = 0;
}

function draw() {
  background('#222');

  // Apply gravity
  velocity += gravity;
  i += velocity;

  // Check for collision with the floor
  if (i > floorHeight - 50) {
    i = floorHeight - 50;
    velocity *= -0.9; // Reverse velocity and apply damping
  }

  // Draw the ball
  fill('#f00');
  ellipse(canvasWidth / 2, i, 100, 100);
  noStroke();

  // Draw the floor
  fill('#fff');
  rect(0, floorHeight, canvasWidth, 100);
}

function canvasResized() {
  resizeCanvas(canvasWidth, canvasHeight);
}