import each from 'jest-each';
import makeSwarm from '../src/js/bs/Swarm';

describe("Swarm", () => {

    const pos = { x: 1, y: 1 };
    const spider = { pos, speed: 4, health: 3 };
    const wasp = { pos, speed: 3, health: 2 };
    const hornet = { pos, speed: 3, health: 4 };
    const scarab = { pos, speed: 3, health: 2 };
    const creature = { pos, speed: 2, health: 1 };

    each([
        [[[1, 1], [1, 2]], 2, 'spider', {
            bases: [ [1, 1], [1, 2] ],
            creatures: [ [ spider ],
                [{
                    pos: { x: 1, y: 2 },
                    speed: 3,
                    health: 3
                }]
            ]
        }],
        [[[1, 1]], 2, 1, 'spider', {
            bases: [ [1, 1] ],
            creatures: [ [ spider ] ]
        }],
        [[[1, 1], [1, 2]], 1, 'spider', {
            bases: [ [1, 1] ],
            creatures: [ [ spider ] ]
        }],
        [[[1, 1]], 1, 'wasp', {
            bases: [ [1, 1] ],
            creatures: [ [ wasp, wasp, wasp ] ]
        }],
        [[[1, 1]], 1, 'hornet', {
            bases: [ [1, 1] ],
            creatures: [ [ hornet, hornet, hornet, hornet ] ]
        }],
        [[[1, 1]], 1, 'scarab', {
            bases: [ [1, 1] ],
            creatures: [
                [
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab,
                    scarab
                ]
            ]
        }],
        [[[1, 1]], 1, '', {
            bases: [[1, 1]],
            creatures: [ [ creature, creature, creature, creature, creature ] ]
        }]
    ]).test("should return swarm with bases=%s, %s mobs and no. of creatures per mob based on %s ", (bases, mobs, type, outcome) => {
        const swarm = makeSwarm({ bases, mobs, type });
        // bases: no. and coordinates
        expect(swarm.bases).toBe(outcome.bases); 
        // no. of mobs
        expect(swarm.creatures.length).toBe(outcome.creatures.length); 
        // no. of creatures per mob
        expect(swarm.creatures[0].length).toBe(outcome.creatures[0].length); 
        // position of first creature in first mob
        expect(swarm.creatures[0][0].pos).toBe(outcome.creatures[0][0].pos);
        // speed of first creature in first mob matches type speed
        expect(swarm.creatures[0][0].speed).toBe(outcome.creatures[0][0].speed);
        // health of first creature in first mob matches type health
        expect(swarm.creatures[0][0].health).toBe(outcome.creatures[0][0].health);
        
    });
});