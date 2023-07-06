const app = {
    unit: 32,
    default_speed: 5,
    invalid_coordinate: -100,
    setView(width, height) {
        this.width = width;
        this.height = height;
    }
}

const container = document.querySelector('.container');
const width = container.clientWidth;
const height = container.clientHeight;

function preload() {
    images.tiles = loadImage('../assets/tileset_arranged.png');
    images.robots.spider = loadImage('../assets/Spider.png');
    images.robots.wasp = loadImage('../assets/Wasp.png');
    images.robots.hornet = loadImage('../assets/Hornet.png');
    images.robots.scarab = loadImage('../assets/Scarab.png');
    images.robots.creature = loadImage('../assets/Centipede.png');
    images.shawn.open = loadImage('../assets/PixeledOpen.png');
    images.shawn.closed = loadImage('../assets/PixeledClosed.png');
}

function setup() { 
    game.map_width = width * 4 + width / 2;
    game.map_height = height;

    createCanvas(game.map_width, game.map_height);
    rectMode(CENTER);

    game.buffer = createGraphics(game.map_width, game.map_height);
    const map = new MapGenerator(100, 1);
    map.generateMap();
    map.draw(game.buffer);

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
    
    const { player, swarm} = game;
    image(game.buffer, 0, 0);

    if (player.life)
        player.draw();
    for (const creature of swarm)
        creature.draw();
    player.move();

    if (player.pos.x > width / 2 && player.pos.x < game.map_width - width / 2) {
        const canvas = document.querySelector('main');
        canvas.style.transform = `translateX(-${player.pos.x - width / 2}px)`;
        console.log(canvas.style.transform);
    }

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
            const sting = creature.stings[i];
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
