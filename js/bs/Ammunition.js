import App from './App';

class Ammunition {
    constructor({ x, y, angle }) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = App.unit;
    }

    move() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
    }
}

export default function makeAmmunition(params) {
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