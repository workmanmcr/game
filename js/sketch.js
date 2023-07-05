const app = {
    unit: 16,
    default_speed: 2,
    invalid_coordinate: -100,
    setView(width, height) {
        this.width = width;
        this.height = height;
    }
};
const game_pieces = {
    player: {
        draw() {
        },
        move() {
        }
    },
    swarms: {
        draw() {
        },
        move() {
        }
    }
}
app.setView(window.innerWidth, window.innerHeight);

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
}

function draw() {
    background(220);
    game_pieces.player.draw();
    game_pieces.swarms.draw();
    game_pieces.player.move();
    game_pieces.swarms.move();
}