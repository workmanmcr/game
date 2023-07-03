const app = {
    unit: 16
};

export function setApp(params) {
    app = { ...app, width: params.width, height: params.height };
}

export function sketch(p) {
    p.setup = function () {
        p.rectMode(p.CENTER);
        p.createCanvas(app.width, app.height);
    } 

    p.draw = function () {}
}