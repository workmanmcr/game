class MapGenerator {
    constructor(granularity, tileSize, seed) {
        this.seed = seed;
        noiseSeed(seed);
        this.granularity = granularity;
        this.tileSize = tileSize;
    }

    generateMap() {
        this.map = [];
        for (let i = 0; i < height / this.tileSize; i++) {
            this.map[i] = [];
            for (let j = 0; j < width / this.tileSize; j++) {
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
        else if (value < .9) {
            fill('grey');
        }
        else {
            fill('white');
        }
    }

    draw() {
        noStroke()
        for (let i = 0; i < height / this.tileSize; i++) {
            for (let j = 0; j < width / this.tileSize; j++) {
                const val = noise(i / this.granularity, j / this.granularity);
                this.setColor(val);
                rect(i * this.tileSize + this.tileSize / 2, j * this.tileSize + this.tileSize / 2, this.tileSize, this.tileSize);
            }
        }
    }
}