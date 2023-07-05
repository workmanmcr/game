const app = {
    unit: 16,
    default_speed: 2,
    invalid_coordinate: -100
}

const game = {
    player: {},
    swarms: {}
}

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    game.player = new Player(0, 0);
}

function draw() {
    background(220);
    game.player.draw();
    game.player.move();
}



