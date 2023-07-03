import each from 'jest-each';
import makeCreature from '../src/js/bs/Creature';

/* Refer testing_guide.md */

describe("Creature", () => {
    const input = { x: 1, y: 1, speed: 2, health: 1, color: [0] };

    each([
        [{
            speed: 3,
            health: 3,
            color: [255, 0, 0]
        }, 1, 1, 'spider'],
        [{
            speed: 3,
            health: 2,
            color: [255, 255, 0]
        }, 1, 1, 'wasp'],
        [{
            speed: 3,
            health: 4,
            color: [160, 82, 45]
        }, 1, 1, 'hornet'],
        [{
            speed: 3,
            health: 2,
            color: [128, 0, 128]
        }, 1, 1, 'scarab'],
        [{}, 1, 1, ''],
        [{ x: -100 }, '1', 1, ''],
        [{ y: -100 }, 1, '1', '']
    ]).test("should return creature %s with x=%s, y=%s of type=%s", (outcome, x, y, type) => {
        const creature = makeCreature({ x, y, type });
        expect(creature.pos.x).toBe(outcome.x
            || input.x);
        expect(creature.pos.y).toBe(outcome.y
            || input.y);
        expect(creature.speed).toBe(outcome.speed
            || input.speed);
        expect(creature.health).toBe(outcome.health
            || input.health);
        expect(creature.color).toEqual(outcome.color
            || input.color)
    });

    const pos = { x: 32, y: 32 };

    each([
        [-Math.PI],
        [-(3 / 4) * Math.PI],
        [-Math.PI / 2],
        [-Math.PI / 4],
        [0],
        [Math.PI / 4],
        [Math.PI / 2],
        [(3 / 4) * Math.PI],
        [Math.PI]
    ]).test("should add a sting with angle=%s to creature's stings", (angle) => {
        const creature = makeCreature({ ...pos });
        creature.angle = angle;
        creature.shoot();
        expect(creature.stings[0].x).toBe(pos.x);
        expect(creature.stings[0].y).toBe(pos.y);
        expect(creature.stings[0].angle).toBeCloseTo(angle);
    })
});