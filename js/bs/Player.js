class Player {
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
  // move() {
  //   if (keyIsDown(65)) {
  //     this.dx = -1;
  //   }
  //   if (keyIsDown(83)) {
  //     this.dy = 1;
  //   } 
  //   if (keyIsDown(87)) {
  //     this.dy = -1;
  //   }
  //   if (keyIsDown(68)) {
  //     this.dx = 1;
  //   }
  //   this.pos.x += this.dx * this.speed;
  // }
  placeCharacter = () => {
  
    var pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    
    const held_direction = held_directions[0];
    if (held_direction) {
      if (held_direction === directions.right) {x += speed;}
      if (held_direction === directions.left) {x -= speed;}
      if (held_direction === directions.down) {y += speed;}
      if (held_direction === directions.up) {y -= speed;}
      character.setAttribute("facing", held_direction);
    }
    character.setAttribute("walking", held_direction ? "true" : "false");
    
    //Limits (gives the illusion of walls)
    var leftLimit = -8;
    var rightLimit = (16 * 11)+8;
    var topLimit = -8 + 32;
    var bottomLimit = (16 * 7);
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit; }
    
    
    var camera_left = pixelSize * 66;
    var camera_top = pixelSize * 42;
    
    map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
    character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
  }
  step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
      step();
    })
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
  };
};