import App from './App';
// import CollisionDetector from './CollisionDetector'
import makeCreature from './Creature';

class Swarm {
    constructor(params) {
        this.creatures = [];
        for (let i = 0; i < params.bases.length; i++) {
            this.creatures[i] = [];
            const base = params.bases[i];
            for (let j = 0; j < params.creatures; j++) {
                this.creatures[i][j] = makeCreature({
                    x: base.x,
                    y: base.y,
                    type: params.type
                });
                this.creatures[i][j].base = base;
            }
        }
        this.range = params.range;
    }

    move() {}
}

function isNumber(coordinate) {
    return typeof coordinate === 'number' ?
        coordinate : App.invalid_coordinate;
}

/**
 * makeSwarm returns a swarm class with a number of mobs based on the number of bases (or coordinates for propagation points) supplied and a number of creatures per mob specified by the type of creature to spawn.
 * If a coordinate is not a number, it is replaced by the default for an invalid coordinate: -100
 * If bases consists of one object with coordinates, this is converted to an array with one base coordinates
 * If params does not have a bases property or the bases property is empty, a swarm will be returned with an empty set of creatures
 * @param {Object} params 
 * @param {Object[]} params.bases : contains objects with coordinates for propagation points
 * @param {String} params.type : type of creature to spawn
 * @returns {Object} swarm
 */
export default function makeSwarm(params) {
    params.bases = params.hasOwnProperty('bases') ?
        Array.isArray(params.bases) ?
            params.bases.map(base => ({
                x: isNumber(base.x),
                y: isNumber(base.y),
            }))
            : [{
                x: params.bases.hasOwnProperty('x') ?
                    isNumber(params.bases.x) : App.invalid_coordinate,
                y: params.bases.hasOwnProperty('y') ?
                    isNumber(params.bases.y) : App.invalid_coordinate
            }]
        : [];

    params.type = params.hasOwnProperty('type')
        && ['spider', 'wasp', 'hornet', 'scarab'].includes(params.type) ?
        params.type : 'creature';
    
    switch (params.type) {
        case 'spider':
            params.creatures = 1;
            params.range = App.unit * 2;
            break;
        case 'wasp':
            params.creatures = 3;
            params.range = App.unit;
            break;
        case 'hornet':
            params.creatures = 4;
            params.range = App.unit * 3;
            break;
        case 'scarab':
            params.creatures = 20;
            params.range = 30;
            break;
        default:
            params.creatures = 5;
            params.range = App.unit / 2;
    }
    
    return new Swarm(params);
}