class Ammunition {
    constructor({ x, y, angle, type }) {
        this.pos = createVector(x, y);
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = app.unit;
        this.type = type;
    }

    move() {
        this.pos.add(this.speed * Math.cos(this.angle), this.speed * Math.sin(this.angle));
    }

    draw() {
        const length = app.unit / 4;
        if (this.type === 'bullet') {
            fill(0);
            noStroke();
            circle(this.pos.x, this.pos.y, length);
        }
        else {
            noFill();
            stroke(0);
            strokeWeight(2);
            const half_x = length * Math.cos(this.angle);
            const half_y = length * Math.sin(this.angle);
            line(this.pos.x + half_x, this.pos.y + half_y, this.pos.x - half_x, this.pos.y - half_y);
        }
    }
}

function makeAmmunition(params) {
    params.x = params.hasOwnProperty('x')
        && typeof params.x === 'number' ?
        params.x : App.invalid_coordinate;
    
    params.y = params.hasOwnProperty('y')
        && typeof params.y === 'number' ?
        params.y : App.invalid_coordinate;
    
    params.angle = params.hasOwnProperty('angle')
        && typeof params.angle === 'number' ?
        params.angle : 0;
    
    return new Ammunition(params);
}