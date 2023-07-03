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
      console.log("move left");
    }
    if (p.keyIsDown(68)) {
      this.dy = 1;
      console.log("move down");
    }
    if (p.keyIsDown(87)) {
      this.dy = -1;
      console.log("move up");
    }
    if (p.keyIsDown(83)) {
      this.dx = 1;
      console.log("move right");
    }
    this.pos.x += this.dx * this.speed;

    // this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x); // add this
    }
}
