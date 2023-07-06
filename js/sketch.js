const app = {
    unit: 200,
    default_speed: 50,
    invalid_coordinate: -100,
    max_health: 20
}

const game = {
    map: {},
    map_width: 0,
    map_height: 0,
    map_pos_x: 0,
    player: {},
    swarm: [],
    tiles: {},
    buffer: ''
}

let playerImage;
let openedMouth

function preload() {
    playerImage = loadImage('./assets/img/Shawn/PixeledClosed.png');
    openedMouth = loadImage('./assets/img/Shawn/PixeledOpen.png');
}

const container = document.querySelector('.container');
//const width = container.clientWidth;
//const height = container.clientHeight;

function preload() {
    game.tiles = loadImage('../assets/tileset_arranged.png');
}

function setup() {
    game.map_width = 10000;
    game.map_height = windowHeight;

    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);

    game.buffer = createGraphics(game.map_width, game.map_height);
    game.map = new MapGenerator(15, 1);
    //game.map.generateMap();
    game.map.draw();

    game.player = new Player(app.unit, app.unit);
    game.swarm.push(creatures.makeCreature({
        x: width - app.unit,
        y: height - app.unit,
        type: 'spider'
    }));
    game.swarm.push(creatures.makeCreature({
        x: app.unit,
        y: height - app.unit,
        type: 'wasp'
    }));
    game.swarm.push(creatures.makeCreature({
        x: width - app.unit,
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
    const { player, swarm } = game;
    image(game.buffer, 0, 0, width, height, game.map_pos_x, 0, width, height);

    if (player.life)
        player.draw();
    for (const creature of swarm)
        creature.draw();
    player.move();

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