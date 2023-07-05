class Player {
    constructor(x, y) {
        this.size = 1;
        this.speed = 2;
        this.angle = 0;
        this.pos = createVector(x, y);
        this.bullets = [];
        this.health = app.max_health;
        this.life = 1;
    }
    // press A to move left, D to move right, W to move up, S to move down
    move() {
        if (keyIsDown(65)) {
            this.pos.x += -1 * this.speed;
        }
        if (keyIsDown(83)) {
            this.pos.y += 1 * this.speed;
        }
        if (keyIsDown(87)) {
            this.pos.y += -1 * this.speed;
        }
        if (keyIsDown(68)) {
            this.pos.x += 1 * this.speed;
        }

        if (keyIsDown(74)) {
            this.angle -= 0.1;
        }
        if (keyIsDown(76)) {
            this.angle += 0.1;
        }

        if (keyIsDown(75) || mouseIsPressed) {
            this.shoot();
        }

        for (const bullet of this.bullets)
            bullet.move();
    }
    // press J and L to aim and spacebar to shoot or use mouse to aim and left click to shoot.
    shoot() {
        this.bullets.push(makeAmmunition({
            x: this.pos.x,
            y: this.pos.y,
            angle: this.angle,
            type: 'bullet'
        }))
    }

    hit() {
        this.health--;
        return this.health === 0;
    }

    draw() {
        fill(255);
        stroke(0);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        square(0, 0, app.unit);
        pop();

        for (const bullet of this.bullets)
            bullet.draw();
    }
}