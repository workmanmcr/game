import each from 'jest-each';
import makeCreature from '../src/js/bs/Creature';

/* Refer testing_guide.md */

describe("Creature", () => {
    each([
        [{ x: 1, y: 1, dx: 0, dy: 0 }, 1, 1],
        [{ x: 1, y: 0, dx: 0, dy: 0 }, 1, 0],
        [{ x: 0, y: 1, dx: 0, dy: 0 }, 0, 1],
        [{ x: 0, y: 0, dx: 0, dy: 0 }, 0, 0],
        [{ x: -100, y: 1, dx: 0, dy: 0 }, '1', 1],
        [{ x: 1, y: -100, dx: 0, dy: 0 }, 1, '1']
    ]).test("Should create a creature %s at %s, %s", (outcome, x, y) => {
        const creature = makeCreature({ x, y });
        expect(creature.x).toEqual(outcome.x);
        expect(creature.y).toEqual(outcome.y);
        expect(creature.dx).toEqual(outcome.dx);
        expect(creature.dy).toEqual(outcome.dy);
    });
});