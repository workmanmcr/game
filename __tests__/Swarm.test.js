import each from 'jest-each';
import makeSwarm from '../src/js/bs/Swarm';

describe("Swarm", () => {

    const pos = {
        x: 1,
        y: 1
    };
    const spider = {
        pos,
        speed: 4,
        health: 3,
        base: pos
    };
    const wasp = {
        pos,
        speed: 3,
        health: 2,
        base: pos
    };
    const hornet = {
        pos,
        speed: 3,
        health: 4,
        base: pos
    };
    const scarab = {
        pos,
        speed: 3,
        health: 2,
        base: pos
    };
    const creature = {
        pos,
        speed: 2,
        health: 1,
        base: pos
    };
    const bases = [{
        x: 1,
        y: 1
    }];

    each([
        [1, 'spider', bases, { creatures: [ [spider] ] }],
        [2, 'wasp', bases, { creatures: [ [ wasp, wasp, wasp ] ] }],
        [3, 'hornet', bases, { creatures: [ [ hornet, hornet, hornet, hornet ] ] }],
        [4, 'scarab', bases, {
            creatures: [ [ scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab, scarab ] ]
        }],
        [5, '', bases, {
            creatures: [[creature, creature, creature, creature, creature]]
        }],
        [6, 'wizard', bases, {
            creatures: [[creature, creature, creature, creature, creature]]
        }],
        [7, 1, bases, {
            creatures: [[creature, creature, creature, creature, creature]]
        }],
        [8, 'spider', [], { creatures: [] }],
        [9, 'spider', { x: 1, y: 1 }, { creatures: [[spider]] }],
        [10, 'spider', { x: '1', y: 1 }, {
            creatures: [[
                {
                    pos: { x: -100, y: 1 },
                    speed: 4,
                    health: 3,
                    base: { x: -100, y: 1 }
                }
            ]]
        }],
        [11, 'spider', { x: 1, y: '1' }, {
            creatures: [[
                {
                    pos: { x: 1, y: -100 },
                    speed: 4,
                    health: 3,
                    base: { x: 1, y: -100 }
                }
            ]]
        }],
        [12, 'spider', [{ x: -10, y: -10 }], {
            creatures: [[
                {
                    pos: { x: -10, y: -10 },
                    speed: 4,
                    health: 3,
                    base: { x: -10, y: -10 }
                }
            ]]
        }],
        [13, 'spider', [{ x: 1, y: 1 }, { x: 2, y: 2 }], {
            creatures: [[spider], [
                {
                    pos: { x: 2, y: 2 },
                    speed: 4,
                    health: 3,
                    base: { x: 2, y: 2 }
                }
            ]]
        }]
    ]).test("%s should return swarm with no. of mobs equivalent to bases and no. of creatures per mob based on %s", (num, type, bases, outcome) => {
        const swarm = makeSwarm({ test, type, bases });
        // no. of mobs
        expect(swarm.creatures.length).toBe(outcome.creatures.length);
        if (swarm.creatures.length === 0)
            return;
        const lastMob = swarm.creatures.length - 1;
        const lastCreature = swarm.creatures[lastMob].length - 1;
        // no. of creatures per mob
        expect(swarm.creatures[lastMob].length).toBe(outcome.creatures[lastMob].length); 
        // position of last creature in last mob
        expect(swarm.creatures[lastMob][lastCreature].pos.x)
            .toBe(outcome.creatures[lastMob][lastCreature].pos.x);
        expect(swarm.creatures[lastMob][lastCreature].pos.y)
            .toBe(outcome.creatures[lastMob][lastCreature].pos.y);
        // generation position of last creature in last mob
        expect(swarm.creatures[lastMob][lastCreature].base.x)
            .toBe(outcome.creatures[lastMob][lastCreature].base.x);
        expect(swarm.creatures[lastMob][lastCreature].base.y)
            .toBe(outcome.creatures[lastMob][lastCreature].base.y);
        // speed of last creature in last mob matches type speed
        expect(swarm.creatures[lastMob][lastCreature].speed)
            .toBe(outcome.creatures[lastMob][lastCreature].speed);
        // health of last creature in last mob matches type health
        expect(swarm.creatures[lastMob][lastCreature].health)
            .toBe(outcome.creatures[lastMob][lastCreature].health);
    });
});