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
app.setView(window.innerWidth, window.innerHeight);

function setup() { 
    createCanvas(400, 400);
    rectMode(CENTER);
}

// function draw() {
//     background(220);
//     player.draw();
//     swarms.draw();
//     player.move();
//     swarms.move();
// }