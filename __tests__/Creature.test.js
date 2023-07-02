import each from 'jest-each';
import makeCreature from '../src/js/bs/Creature';

/* Refer testing_guide.md */

describe("Creature", () => {
    const params = {};

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

    beforeEach(() => {
        params.creature = makeCreature({ x: 2, y: 2 });
    })

    each`
        speed | dx    | dy    | x     | y
        ${1}  | ${1}  | ${1}  | ${3}  | ${3}
        ${1}  | ${-1} | ${1}  | ${1}  | ${3}
        ${1}  | ${1}  | ${-1} | ${3}  | ${1}
        ${2}  | ${-1} | ${-1} | ${0}  | ${0}
        ${3}  | ${-1} | ${1}  | ${0}  | ${5}
        ${3}  | ${1}  | ${-1} | ${5}  | ${0}
        ${1}  | ${0}  | ${1}  | ${2}  | ${3}
        ${1}  | ${1}  | ${0}  | ${3}  | ${2}  
    `.test("Should change creature's position to $x, $y given speed=$speed, dx=$dx, and dy=$dy }", ({ speed, dx, dy, x, y }) => {
        params.creature.move({ speed, dx, dy });
        expect(params.creature.x).toBe(x);
        expect(params.creature.y).toBe(y);
    })
});