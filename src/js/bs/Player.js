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
  

    // movement() {
    //   if (key === 'W' || key === 'w') {
    //     player.moveUp();
    //   } else if (key === 'S' || key === 's') {
    //     player.moveDown();
    //   } else if (key === 'A' || key === 'a') {
    //     player.moveLeft();
    //   } else if (key === 'D' || key === 'd') {
    //     player.moveRight();
    //   }
}
