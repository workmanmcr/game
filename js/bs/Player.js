class Player {
    constructor(x, y) {
        this.speed = app.default_speed;
        this.angle = 0;
        this.pos = createVector(x, y);
        this.bullets = [];
        this.health = app.max_health;
        this.life = 1;
        this.graphic = images.shawn.closed;
    };

    // press A to move left, D to move right, W to move up, S to move down
    move() {
        if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
            if (this.pos.x - this.speed - app.unit / 2 >= 0) {
                this.pos.x -= this.speed;
            }
            else {
                game.map_pos_x = Math.max(game.map_pos_x - this.speed, 0);
            }
        }
        if ((keyIsDown(83) || keyIsDown(DOWN_ARROW))
            && this.pos.y + this.speed + app.unit / 2 <= game.map_height) {
            this.pos.y += this.speed;
        }
        if ((keyIsDown(87) || keyIsDown(UP_ARROW))
            && this.pos.y - this.speed - app.unit / 2 >= 0) {
            this.pos.y -= this.speed;
        }
        if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
            if (this.pos.x + this.speed + app.unit / 2 < width / 2) {
                this.pos.x += this.speed;
            }
            else {
                game.map_pos_x = Math.min(game.map_pos_x + this.speed, game.map_width - width);
            }
        }

        if (keyIsDown(74)) {
            this.angle -= 0.1;
        }
        if (keyIsDown(76)) {
            this.angle += 0.1;
        }

        if (keyIsDown(75) || mouseIsPressed) {
            this.shoot();
        } else { this.graphic = images.shawn.closed }

        for (const bullet of this.bullets)
            bullet.move();
    }

    updateAim() {
        const mouseAngle = Math.atan2(mouseY - this.pos.y, mouseX - this.pos.x);
        this.angle = mouseAngle;
    }
    // press J and L to aim and spacebar to shoot or use mouse to aim and left click to shoot.
    shoot() {
        this.graphic = images.shawn.open;
        this.bullets.push(makeAmmunition({
            x: this.pos.x,
            y: this.pos.y + app.unit / 1.5,
            angle: this.angle,
            type: 'bullet'
        }))
    }

    hit() {
        this.health--;
        return this.health === 0;
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        image(this.graphic, - app.unit / 2, - app.unit / 2, app.unit * 2, app.unit * 2);
        pop();

        for (const bullet of this.bullets)
            bullet.draw();
    }
};

