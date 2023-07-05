class MapGenerator {
    constructor(dimensions, seed) {
        [this.i, this.j] = dimensions;
    }

    addNoise() {
        noiseSeed(1);
        let map = [];
        for (let i = 0; i < this.i; i++) {
            map[i] = [];
            for (let j = 0; j < this.j; j++) {
                map[i][j] = noise(i, j);
            }
        }
        return map;
    }
}