class MapGenerator {
    constructor(granularity, seed) {
        this.seed = seed;
        noiseSeed(seed);
        this.granularity = granularity;
    }

    generateMap() {
        this.map = [];
        for (let i = 0; i < game.map_height / app.unit; i++) {
            this.map[i] = [];
            for (let j = 0; j < game.map_width / app.unit; j++) {
                this.map[i][j] = noise(i / this.granularity, j / this.granularity);
            }
        }
    }

    draw(buffer) {
        noStroke();
        const { tiles } = game;
        for (let i = 0; i < game.map_height / app.unit; i++) {
            for (let j = 0; j < game.map_width / app.unit; j++) {
                const val = noise(i / this.granularity, j / this.granularity);
                if (val < .3) {
                    buffer.image(tiles, j * app.unit, i * app.unit, app.unit, app.unit, 0, 0, 16, 16);
                }
                else if (val < .4) {
                    buffer.image(tiles, j * app.unit, i * app.unit, app.unit, app.unit, 16, 0, 16, 16);
                }
                else if (val < .5) {
                    buffer.image(tiles, j * app.unit, i * app.unit, app.unit, app.unit, 0, 16, 16, 16);
                }
                else if (val < .7) {
                    buffer.image(tiles, j * app.unit, i * app.unit, app.unit, app.unit, 16, 16, 16, 16);
                }
                else if (val < .9) {
                    buffer.image(tiles, j * app.unit, i * app.unit, app.unit, app.unit, 0, 32, 16, 16);
                }
                else {
                    buffer.image(tiles, o, j, app.unit, app.unit, 16, 32, 16, 16);
                }
            }
        }
    }
}