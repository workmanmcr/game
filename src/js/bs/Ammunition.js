<<<<<<< HEAD:src/js/bs/Ammunition.js
=======
const ammunition = {
    
}

>>>>>>> 69177a992493abdb572fde436514d5c8d21bf0ea:js/bs/Ammunition.js
class Ammunition {
    constructor({ x, y, angle, type }) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = app.unit;
        this.type = type;
    }

    move() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
    }

    draw() {
        const length = app.unit / 4;
        if (type === 'bullet') {
            fill(0);
            noStroke();
            circle(this.x, this.y, length);
        }
        else {
            noFill();
            stroke(0);
            strokeWeight(3);
            const half_x = length * Math.cos(this.angle);
            const half_y = length * Math.sin(this.angle);
            line(this.x + half_x, this.y + half_y, this.x - half_x, this.y - half_y);
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