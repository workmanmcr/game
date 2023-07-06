export default class Player {
  constructor(x, y) {
    this.size = 1;
    this.dy = 0;
    this.dx = 0;
    this.speed = 2;
    this.pos = { x, y };
    this.health = 5;
    this.life = 1;
  } 
  // press A to move left, D to move right, W to move up, S to move down
  move() {
    if (keyIsDown(65)) {
      this.dx = -1;
    }
    if (keyIsDown(83)) {
      this.dy = 1;
    } 
    if (keyIsDown(87)) {
      this.dy = -1;
    }
    if (keyIsDown(68)) {
      this.dx = 1;
    }
    this.pos.x += this.dx * this.speed;
  }
  updateAim() {
    const mouseAngle = Math.atan2(mouseY - this.pos.y, mouseX - this.pos.x);
    this.angle = mouseAngle;
  }
  // press J and L to aim and spacebar to shoot or use mouse to aim and left click to shoot.
  shoot() {
    if (keyIsDown(74)) { 
      this.angle -= 0.1; 
    }
    if (keyIsDown(76)) { 
      this.angle += 0.1; 
    }
    if (keyIsDown(75) || mouseIsPressed) {
      this.stings.push(makeAmmunition({
        x: this.pos.x,
        y: this.pos.y,
        angle: this.angle
      }))
    }
  }
  draw() {
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.angle);
      pop();
  }
};