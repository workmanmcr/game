export default class Player {
  constructor(x, y) {
    this.size = 1;
    this.dy = 0;
    this.dx = 0;
    this.speed = 2;
    this.pos = { x, y };
    this.health = 3;
  } 
  // press A to move left, D to move right, W to move up, S to move down
  // press J and L to aim and spacebar to shoot.
  move(p) {
    if (p.keyIsDown(65)) {
      this.dx = -1;
    }
    if (p.keyIsDown(83)) {
      this.dy = 1;
    } 
    if (p.keyIsDown(87)) {
      this.dy = -1;
    }
    if (p.keyIsDown(68)) {
      this.dx = 1;
    }
    this.pos.x += this.dx * this.speed;
  }
  updateAim(p) {
    const mouseAngle = Math.atan2(p.mouseY - this.pos.y, p.mouseX - this.pos.x);
    this.angle = mouseAngle;
  }
  shoot(p) {
    if (p.keyIsDown(74)) { 
      this.angle -= 0.1; 
    }
    if (p.keyIsDown(76)) { 
      this.angle += 0.1; 
    }
    if (p.keyIsDown(32, 75) || p.mouseIsPressed) {
      this.stings.push(makeAmmunition({
        x: this.pos.x,
        y: this.pos.y,
        angle: this.angle
      }))
    }
  }
};