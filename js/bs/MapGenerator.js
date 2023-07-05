class MapGenerator {
    constructor(dimensions, granularity, tileSize, seed) {
        this.dimensions = dimensions;
        this.seed = seed;
        noiseSeed(seed);
        this.granularity = granularity;
        this.tileSize = tileSize;
        this.generateMap();
    }

    generateMap() {
        this.map = [];
        for (let i = 0; i < this.dimensions[0]; i++) {
            this.map[i] = [];
            for (let j = 0; j < this.dimensions[1]; j++) {
                this.map[i][j] = noise(i / this.granularity, j / this.granularity);
            }
        }
    }

    setColor(value) {
        if (value < .3) {
            fill('blue');
        }
        else if (value < .4) {
            fill('yellow');
        }
        else if (value < .5) {
            fill('green');
        }
        else if (value < .7) {
            fill('darkgreen');
        }
        else {
            fill('grey');
        }
    }

    draw() {
        for (let i = 0; i < this.dimensions[0]; i++) {
            for (let j = 0; j < this.dimensions[1]; j++) {
                this.setColor(this.map[i][j]);
                rect(i * this.tileSize - width / 2, j * this.tileSize - height / 2, this.tileSize, this.tileSize);
            }
        }
    }
}