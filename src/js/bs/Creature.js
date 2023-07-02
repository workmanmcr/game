class Creature {
    constructor(params) {
        const { x, y } = params;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
    }

    /**
     * Receives a speed, dx and dy. Checks if inputs are valid. If any are found to be invalid, the creature does not move, otherwise the creature moves as directed unless the move would cause them to move off the map.
     * @param {Object} params 
     * @returns undefined if speed is invalid
     */
    move(params) {
        const speed = params.hasOwnProperty('speed') ? params.speed : 1;
        if (typeof speed !== 'number')
            return;
        
        this.dx = params.hasOwnProperty('dx') && typeof params.dx === 'number' ? params.dx : 0;
        if (this.dx !== 0) {
            const x_pos = this.x + (this.dx * speed);
            this.x = x_pos >= 0 ? x_pos : 0;
        }

        this.dy = params.hasOwnProperty('dy') && typeof params.dy === 'number' ? params.dy : 0;
        if (this.dy !== 0) {
            const y_pos = this.y + (this.dy * speed);
            this.y = y_pos >= 0 ? y_pos : 0;
        }
    }
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