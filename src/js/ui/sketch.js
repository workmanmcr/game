const app = {
    unit: 16,
    default_speed: 2,
    invalid_coordinate: -100,
    setView(width, height) {
        this.width = width;
        this.height = height;
    }
}

const game_pieces = {
    player: {},
    swarms: {}
}

const container = document.getElementById('app');
app.setView(window.innerWidth, window.innerHeight);

function setup() { 
    rectMode(CENTER);
    createCanvas(app.width, app.height);
    game_pieces.collider = new Collider();
    game_pieces.player = new Player(0, 0);
}

function draw() {
    const player = game_pieces;
    const swarms = game_pieces;
    background(220);
    drawPlayer(player);
    player.move();
    for (const swarm of swarms) {
        for (const mob of swarm.creatures) {
            for (const creature of mob) {
                drawCreature(creature);
                creature.move();
            }
        }
    }
    collider.detect_collisions(player, swarms);
}