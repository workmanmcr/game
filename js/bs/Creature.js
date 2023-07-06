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
        this.pos = createVector(params.x, params.y);
        this.angle = 0;
        this.distance = 0;
        this.speed = params.speed;
        this.angle = 0;
        this.arc_angle = 0;
        this.health = params.health;
        this.color = params.color;

        this.stings = [];
        this.base = createVector(params.x, params.y);
        this.radius = app.unit * 2;

        this.last_target = {};
    }

    move() {
        const { player } = game;
        
        // this.distance = player.pos.dist(this.pos);
        this.angle = atan2(player.pos.y - this.pos.y, player.pos.x - this.pos.x);

        // if (this.pos.dist(player.pos) > app.unit * 3 || player.pos.dist(this.last_target) > 0) {
        //     this.distance -= this.speed;
        //     this.arc_angle = this.angle;
        // }
        // else {
        //     this.arc_angle += Math.PI / 90;
        //     this.distance = app.unit * 3;
        // } 

        // this.pos = createVector(player.pos.x + cos(this.arc_angle) * this.distance, player.pos.y + sin(this.arc_angle) * this.distance);
        
        this.pos.add(cos(this.angle) * this.speed, sin(this.angle) * this.speed);

        // this.last_target = player.pos;
        
        /* 
            Check if creature has target: move towards target

            No target:
            Spider | Scarab - check if at base: return to base
            Wasp | Hornet - circle base
        */
        
        for (const sting of this.stings)
            sting.move();
    }

    update() {
        let difference = p5.Vector.sub(player.pos, this.pos);
        difference.limit(this.speed);
        this.pos.add(difference);
    }

    draw() {
        fill(...this.color);
        noStroke();
        push();
        translate(this.pos.x, this.pos.y);
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
        }));
    }

    hit() {
        this.health--;
        return this.health === 0;
    }
}

class Spider extends Creature {
    constructor(params) {
        super({ ...params,
            speed: app.default_speed * 2,
            health: 15,
            color: [255, 0, 0]
        });
    }
}

class Wasp extends Creature {
    constructor(params) {
        super({
            ...params,
            speed: app.default_speed,
            health: 10,
            color: [255, 255, 0]
        });
    }
}

class Hornet extends Creature {
    constructor(params) {
        super({ ...params,
            speed: app.default_speed,
            health: 20,
            color: [160, 82, 45]
        })
    }
}

class Scarab extends Creature {
    constructor(params) {
        super({ ...params,
            speed: app.default_speed * 1.5,
            health: 5,
            color: [128, 0, 128]
        })
    }
}