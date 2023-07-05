let character;
let map;
let x = 90;
let y = 34;
let held_directions = [];
const speed = 10;

function preload() {
  // Preload any assets or data files here if needed
}

function setup() {
  const canvas = createCanvas(2000, 1500);
  canvas.parent("canvas-container");

  setupCharacter();

  map = createGraphics(width, height);
  map.background(0);
  map.loadPixels();
  for (let i = 0; i < width * height * 4; i += 4) {
    map.pixels[i + 3] = 255;
  }
  map.updatePixels();
}

function setupCharacter() {
  character = createGraphics(16, 16);
  character.fill(255, 0, 0);
  character.rect(0, 0, 16, 16);
}

function draw() {
  handleInput();
  updateCharacter();
  updateCamera();
  drawScene();
}

function handleInput() {
  held_directions = [];

  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    held_directions.push("up");
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    held_directions.push("down");
  }
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    held_directions.push("left");
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    held_directions.push("right");
  }
}

function updateCharacter() {
  const direction = held_directions[0];
  if (direction) {
    if (direction === "up") {
      y -= speed;
    } else if (direction === "down") {
      y += speed;
    } else if (direction === "left") {
      x -= speed;
    } else if (direction === "right") {
      x += speed;
    }
  }
}

function updateCamera() {
  const camera_left = max(0, x - width / 2);
  const camera_top = max(0, y - height / 2);

  map.background(0);
  map.fill(255);
  map.rect(x - camera_left, y - camera_top, 16, 16);
}

function drawScene() {
  image(map, 0, 0);
}

function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    return false;
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    return false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Initialize the p5.js sketch
function initializeSketch() {
  const canvasContainer = document.getElementById("canvas-container");
  const canvasWidth = 2000;
  const canvasHeight = 1500;

  // Calculate the horizontal and vertical offsets
  const horizontalOffset = (windowWidth - canvasWidth) / 2;
  const verticalOffset = (windowHeight - canvasHeight) / 2;

  // Set the CSS properties to center the canvas
  canvasContainer.style.position = "absolute";
  canvasContainer.style.left = horizontalOffset + "px";
  canvasContainer.style.top = verticalOffset + "px";

  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(canvasContainer);

  setupCharacter();

  map = createGraphics(width, height);
  map.background(0);
  map.loadPixels();
  for (let i = 0; i < width * height * 4; i += 4) {
    map.pixels[i + 3] = 255;
  }
  map.updatePixels();
}

// Attach p5.js functions to the window object
window.preload = preload;
window.setup = initializeSketch;
window.draw = draw;
window.keyPressed = keyPressed;
window.keyReleased = keyReleased;
window.windowResized = windowResized;
