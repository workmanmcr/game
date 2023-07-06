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
    mapGenerator: {},
    player: {},
    swarms: {}
}
app.setView(window.innerWidth, window.innerHeight);

function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
    game_pieces.mapGenerator = new MapGenerator(100, 10, 1);
}

function draw() {
    background(220);
    game_pieces.mapGenerator.draw();
    player.draw();
    swarms.draw();
    player.move();
    swarms.move();
}