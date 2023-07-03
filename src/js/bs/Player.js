export default class Player {
  constructor(x, y) {
      this.size = 1;
      this.dy = 0;
      this.dx = 0; 
      this.speed = 2;
      this.x = x;
      this.y = y;
      this.health = 3;
  }
  move() {
    let xSpeed = 0;
    let ySpeed = 0;
    if (keyIsDown(65)) {
      xSpeed = -2;
      console.log("move left");
    }
    if (keyIsDown(68)) {
      xSpeed = 2;
      console.log("down");
    }
    if (keyIsDown(87)) {
      ySpeed = -2;
      console.log("move up");
    }
    if (keyIsDown(83)) {
      ySpeed = 2;
      console.log("move right");
    }
    this.pos.add(xSpeed, ySpeed);
    this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x); // add this
  }
}
