const creatures = {
    spider: (params) => new Spider(params),
    wasp: (params) => new Wasp(params),
    hornet: (params) => new Hornet(params),
    scarab: (params) => new Scarab(params),
    creature: (params) => new Creature(params),
    makeCreature: (params) => {
        params.x = params.hasOwnProperty('x')
            && typeof params.x === 'number' ?
            params.x : app.invalid_coordinate;  
        params.y = params.hasOwnProperty('y')
            && typeof params.y === 'number' ?
            params.y : app.invalid_coordinate;
        const type = params.hasOwnProperty('type')
            && ['spider', 'wasp', 'hornet', 'scarab'].includes(params.type) ?
            params.type : 'creature';
        if (type === 'creature') {
            params.speed = app.default_speed;
            params.health = 1;
            params.size = 1;
            params.color = [0];
        }
        delete params.type;
        return creatures[type](params);
    }
};

class Creature {
    constructor(params) {
        this.pos = { x: params.x, y: params.y };
        this.dx = 0;
        this.dy = 0;
        this.angle = 0;
        this.speed = params.speed;
        this.angle = 0;
        this.arc_angle = 0;
        this.health = params.health;
        this.color = params.color;

        this.stings = [];
        this.target = {};
        this.base = {};
    }

    getTarget(player) {
        this.target = player.pos;
    }

    move() {
        this.target = getTarget(player);
        this.angle = atan2(this.target.y - this.pos.y, this.target.x - this.pos.x);
        let distance = dist(this.pos.x, this.pos.y, target.x, target.y);
        if (distance > this.range + App.unit)
            distance -= this.speed;

        this.arc_angle += Math.PI / 45;
        this.x = this.target.x + cos(this.arc_angle) * distance;
        this.y = this.target.y + sin(this.arc_angle) * distance;

        if(distance < this.range)
            this.shoot();
        
        /* 
            Check if creature has target: move towards target

            No target:
            Spider | Scarab - check if at base: return to base
            Wasp | Hornet - circle base
        */
    }

    draw() {
        fill(...this.color);
        noStroke();
        push();
        translate(this.pos.x, this.pox.y);
        rotate(this.angle);
        rect(0, 0, app.unit, app.unit);
        pop();

        for (let sting of this.stings) 
            sting.draw();
    }

    shoot() {
        this.stings.push(new Ammunition({
            x: this.pos.x,
            y: this.pos.y,
            angle: this.angle,
            type: 'sting'
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
        super({
            ...params,
            speed: 3,
            health: 2,
            color: [255, 255, 0]
        });
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