let canvasWidth;
let canvasHeight;
let ballYPosition = 0;
let floorHeight;
let velocity = 0;
let gravity = 0.5;
let bounceThreshold = 1;

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  floorHeight = canvasHeight - 25;
  createCanvas(canvasWidth, canvasHeight);
}

// Drop the ball again
function dropBall() {
  ballYPosition = 0;
}

// Handle key presses
function keyPressed() {
  if (key === "ArrowUp") {
    velocity = velocity - 10;
  }
  if (key === "ArrowDown") {
    velocity = velocity + 10;
  }
}

function draw() {
  background('#000');

  // Apply gravity
  velocity += gravity;
  ballYPosition += velocity;

  // Check for collision with the floor
  if (ballYPosition > floorHeight - 50) {
    ballYPosition = floorHeight - 50;
    // Reverse velocity and apply damping
    if (Math.abs(velocity) > bounceThreshold) {
      let bounceSound = new Audio('content/audio/ball.mp3');
      bounceSound.play();
      console.log('bounce');
    }
    velocity *= -0.9;
  }

  // Draw the ball
  fill('#f00');
  ellipse(canvasWidth / 2, ballYPosition, 100, 100);
  noStroke();

  // Draw the floor
  fill('#444');
  rect(0, floorHeight, canvasWidth, 100);
}

function windowResized() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  floorHeight = canvasHeight - 25;
  resizeCanvas(canvasWidth, canvasHeight);
}