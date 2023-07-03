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
        const player = new Player(1, 1);
        player.move(p);
    };
}