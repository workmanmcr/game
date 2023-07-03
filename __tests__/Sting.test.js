import each from 'jest-each';
import makeSting from "../src/js/bs/Sting";

describe("Sting", () => {
    each([
        [{ x: 1, y: 1, angle: 0 }, 1, 1, 0],
        [{ x: 1, y: 1, angle: Math.PI }, 1, 1, Math.PI],
        [{ x: -100, y: 1, angle: 0 }, '1', 1, 0],
        [{ x: 1, y: -100, angle: 0 }, 1, '1', 0],
        [{ x: 1, y: 1, angle: 0 }, 1, 1, '0']
    ]).test("should create a sting %s with x=%s, y=%s and an angle of %s", (outcome, x, y, angle) => {
        const sting = makeSting({ x, y, angle });
        expect(sting.x).toBe(outcome.x);
        expect(sting.y).toBe(outcome.y);
        expect(sting.angle).toBeCloseTo(outcome.angle);
    })
})