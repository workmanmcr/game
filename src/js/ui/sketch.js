

const app = {
    setView(width, height) {
        this.width = width;
        this.height = height;
    }
};
function sketch() {
    setup = function () {
        rectMode(CENTER);
        createCanvas(app.width, app.height);
    } ;

    draw = function () {
<<<<<<< HEAD
        background(0);
        fill(255);
        rect(32, 32, 20, 20);
    }
=======
        const player = new Player(1, 1);
        player.move();
        player.shoot()
    };
>>>>>>> 9f4cc0c8236557f922680a0de83234b32c511548
}