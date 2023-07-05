export default class Player {
  constructor(x, y) {
    this.size = 1;
    this.dy = 0;
    this.dx = 0;
    this.speed = 2;
    this.pos = { x, y };
    this.health = 3;
  }

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
  shoot(p) {
    if (p.keyIsDown(32)) {
      this.stings.push(makeAmmunition({
        x: this.pos.x,
        y: this.pos.y,
        angle: this.angle
      }))
    }
  };