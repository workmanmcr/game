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
        for (let i = 0; i < swarm.creatures.length; i++) {
            const mob = swarm.creatures[i];
            for (let j = 0; j < mob.length; j++) {
                const creature = mob[j];
                expect(creature.pos.x).toBe(outcome.creatures[i][j].pos.x);
                expect(creature.pos.y).toBe(outcome.creatures[i][j].pos.y);
                expect(creature.base.x).toBe(outcome.creatures[i][j].base.x);
                expect(creature.base.y).toBe(outcome.creatures[i][j].base.y);
                expect(creature.speed).toBe(outcome.creatures[i][j].speed);
                expect(creature.health).toBe(outcome.creatures[i][j].health);
            }
        }
    });
});