import App from './App';
import makeSting from './Sting';

// import CollisionDetector from './CollisionDetector'
// change color to graphic when graphics used

class Creature {
    constructor(params) {
        if (!params.hasOwnProperty('speed'))
            params.speed = App.default_speed;
        
        if (!params.hasOwnProperty('health'))
            params.health = 1;
        
        if (!params.hasOwnProperty('size'))
            params.size = 1;
        
        if (!params.hasOwnProperty('color'))
            params.color = [0];

        this.pos = { x: params.x, y: params.y };
        this.dx = 0;
        this.dy = 0;
        this.angle = 0;
        this.speed = params.speed;
        this.health = params.health;
        
        this.dimension = params.size * App.unit;
        this.color = params.color;

        this.stings = [];
        this.target = {};
        this.base = {};
    }

    move() {
        /* 
            Check if creature has target: move towards target
            Check Collision Detector
            - if obstacle in way: move adjacent

            No target:
            Spider | Scarab - check if at base: return to base
            Wasp | Hornet - circle base
        */
    }

    shoot() {
        this.stings.push(makeSting({
            x: this.pos.x,
            y: this.pos.y,
            angle: this.angle
        }))
    }

    hit() {
        this.health--;
        return this.health === 0;
    }
}

class Spider extends Creature {
    constructor(params) {
        super({ ...params,
            speed: 3,
            health: 3,
            color: [255, 0, 0]
        });
    }
}

class Wasp extends Creature {
    constructor(params) {
        super({ ...params,
            speed: 3,
            health: 2,
            color: [255, 255, 0]
        })
    }
}

class Hornet extends Creature {
    constructor(params) {
        super({ ...params,
            speed: 3,
            health: 4,
            color: [160, 82, 45]
        })
    }
}

class Scarab extends Creature {
    constructor(params) {
        super({ ...params,
            speed: 3,
            health: 2,
            color: [128, 0, 128]
        })
    }
}

export default function makeCreature(params) { 
    params.x = params.hasOwnProperty('x')
        && typeof params.x === 'number' ?
        params.x : App.invalid_coordinate;  
    params.y = params.hasOwnProperty('y')
        && typeof params.y === 'number' ?
        params.y : App.invalid_coordinate;
    const type = params.hasOwnProperty('type')
        && ['spider', 'wasp', 'hornet', 'scarab'].includes(params.type) ?
        params.type : '';
    delete params.type;

    let creature;
    switch (type) {
        case 'spider':
            creature = new Spider(params);
            break;
        case 'wasp':
            creature = new Wasp(params);
            break;
        case 'hornet':
            creature = new Hornet(params);
            break;
        case 'scarab':
            creature = new Scarab(params);
            break;
        default:
            creature = new Creature(params);
    }
    return creature;
}