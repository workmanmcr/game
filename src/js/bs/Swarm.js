import App from './App';
// import CollisionDetector from './CollisionDetector'
import makeCreature from './Creature';

class Swarm {
    constructor(params) {
        this.bases = params.bases;
        this.creatures = [];
        for (let i = 0; i < params.mobs; i++) {
            this.creatures[i] = [];
            for (let j = 0; j < params.creatures; j++) {
                const base = this.bases[i];
                this.creatures[i][j] = makeCreature({
                    x: base[0],
                    y: base[1],
                    type: params.type
                })
            }
                
        }
    }
}

class SpiderSwarm extends Swarm { }

class WaspSwarm extends Swarm { }

class HornetSwarm extends Swarm { }

class ScarabSwarm extends Swarm { }

export default function makeSwarm(params) {
    params.bases = params.hasOwnProperty('bases')
        && Array.isArray(params.bases)
        && params.bases.every(base => base.length === 2) ?
        params.bases : [
            [App.invalid_coordinate, App.invalid_coordinate],
            [App.invalid_coordinate, App.invalid_coordinate],
            [App.invalid_coordinate, App.invalid_coordinate]
        ];
    params.mobs = params.hasOwnProperty('mobs')
        && params.mobs === 'number'
        && params.mobs > 0 ?
        params.mobs : 1;
    if (params.mobs !== params.bases.length) {
        if (params.mobs > params.bases.length)
            params.mobs = params.bases.length;
        else
            for (let i = 0; i < params.bases.length - params.mobs; i++)
                params.bases.pop();
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