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
    }
}

class SpiderSwarm extends Swarm { }

class WaspSwarm extends Swarm { }

class HornetSwarm extends Swarm { }

class ScarabSwarm extends Swarm { }

export default function makeSwarm(params) {
    if (params.hasOwnProperty('bases') && Array.isArray(params.bases)) {
        for (const base of params.bases) {
            base.x = typeof base.x === 'number' ? base.x : App.invalid_coordinate;
            base.y = typeof base.y === 'number' ? base.y : App.invalid_coordinate;
        }
    }
    params.type = params.hasOwnProperty('type')
        && ['spider', 'wasp', 'hornet', 'scarab'].includes(params.type) ?
        params.type : 'creature';
    
    switch (params.type) {
        case 'spider':
            params.creatures = 1;
            break;
        case 'wasp':
            params.creatures = 3;
            break;
        case 'hornet':
            params.creatures = 4;
            break;
        case 'scarab':
            params.creatures = 20;
            break;
        default:
            params.creatures = 5;
    }
    
    return new Swarm(params);
}