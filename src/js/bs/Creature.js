class Creature {
    constructor(params) {
        const { x, y } = params;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
    }

    move(params) {}
}

const position = {
    x: -100,
    y: -100
}

/**
 * Receives an x and y coordinate for generating a new creature. If a coordinate is invalid, it is replaced by the default coordinate. Default coordinates cause the creature to be rendered off map.
 * @param {Object} params 
 * @param {Number} params.x
 * @param {Number} params.y
 * @returns {Creature}
 */
export default function makeCreature(params) {
    params.x = params.hasOwnProperty('x') && typeof params.x === 'number' ? params.x : position.x;
    params.y = params.hasOwnProperty('y') && typeof params.y === 'number' ? params.y : position.y;
    return new Creature({ x: params.x, y: params.y });
}