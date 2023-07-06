const app = {
    unit: 200,
    default_speed: 50,
    invalid_coordinate: -100,
    max_health: 20
}

const game = {
    mapGenerator: {},
    player: {},
    swarm: []
}

let playerImage;
let openedMouth

function preload() {
    playerImage = loadImage('./assets/img/Shawn/Closed-Mouth.png')
    openedMouth = loadImage('./assets/img/Shawn/Open-Mouth.png')
    
}


const container = document.querySelector('.container');
const width = container.clientWidth;
const height = container.clientHeight;

function setup() {
    createCanvas(width, height);
    rectMode(CENTER);
    game.mapGenerator = new MapGenerator(100, 10, 1);
    game.player = new Player(app.unit, app.unit);
    game.swarm.push(creatures.makeCreature({
        x: width - (app.unit * 2),
        y: height - (app.unit * 2),
        type: 'spider'
    }));
    game.swarm.push(creatures.makeCreature({
        x: app.unit,
        y: height - (app.unit * 2),
        type: 'wasp'
    }));
    game.swarm.push(creatures.makeCreature({
        x: width - (app.unit * 2),
        y: app.unit,
        type: 'hornet'
    }));
    game.swarm.push(creatures.makeCreature({
        x: width / 2,
        y: height / 2,
        type: 'scarab'
    }));
}

function draw() {
    background(220);
    // game.mapGenerator.draw();

    if (game.player.life)
        game.player.draw();
    for (const creature of game.swarm) 
        creature.draw();
    game.player.move();
    for (const creature of game.swarm)
        creature.move();
    
    for (let i = 0; i < game.player.bullets.length; i++) {
        const bullet = game.player.bullets[i];
        for (const creature of game.swarm) {
            const distance = dist(bullet.x, bullet.y, creature.x, creature.y) <= app.unit;
            if (distance <= app.unit) {
                const death = creature.hit();
                if (death) {
                    delete creature;
                    game.player.bullets.splice(i, 1);
                }
            }
        }
    }

    for (const creature of game.swarm) {
        for (let i = 0; i < creature.stings.length; i++) {
            const distance = dist(sting.x, sting.y, game.player.x, game.player.y);
            if (distance <= app.unit) {
                const death = game.player.hit();
                if (death) {
                    game.player.health = app.max_health;
                    game.player.life--;
                }
            }
        }
    }
}
