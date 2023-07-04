export const app = {
    setView(width, height) {
        this.width = width;
        this.height = height;
    }
}

export function sketch(p) {
    p.setup = function () {
        p.rectMode(p.CENTER);
        p.createCanvas(app.width, app.height);
    } 

    p.draw = function () {
        p.background(0);
        p.fill(255);
        p.rect(32, 32, 20, 20);
    }
}