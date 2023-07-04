import Player from "../bs/Player";

export const app = {
    setView(width, height) {
        this.width = width;
        this.height = height;
    }
};

export function sketch(p) {
    p.setup = function () {
        p.rectMode(p.CENTER);
        p.createCanvas(app.width, app.height);
    } ;

    p.draw = function () {
<<<<<<< HEAD
        p.background(0);
        p.fill(255);
        p.rect(32, 32, 20, 20);
    }
=======
        const player = new Player(1, 1);
        player.move(p);
    };
>>>>>>> 9f4cc0c8236557f922680a0de83234b32c511548
}