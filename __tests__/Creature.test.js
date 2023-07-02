import each from 'jest-each';
import Creature from '../src/js/bs/Creature';

/* Refer testing_guide.md */

describe("Creature", () => {
    each([
        [{ x: 1, y: 1, dx: 0, dy: 0 }, 1, 1],
        [{ x: 1, y: 0, dx: 0, dy: 0 }, 1, 0],
        [{ x: 0, y: 1, dx: 0, dy: 0 }, 0, 1],
        [{ x: 0, y: 0, dx: 0, dy: 0 }, 0, 0]
    ]).test("Should create a creature %s at %s, %s", (expected, x, y) => {
        const creature = new Creature({ x, y });
        expected(creature).toEqual(expected);
    });
});