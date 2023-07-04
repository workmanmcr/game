import each from 'jest-each';
import makeAmmunition from "../src/js/bs/Ammunition";

describe("Ammunition", () => {
    each([
        [{ x: 1, y: 1, angle: 0 }, 1, 1, 0],
        [{ x: 1, y: 1, angle: Math.PI }, 1, 1, Math.PI],
        [{ x: -100, y: 1, angle: 0 }, '1', 1, 0],
        [{ x: 1, y: -100, angle: 0 }, 1, '1', 0],
        [{ x: 1, y: 1, angle: 0 }, 1, 1, '0']
    ]).test("should create a ammunition %s with x=%s, y=%s and an angle of %s", (outcome, x, y, angle) => {
        const ammunition = makeAmmunition({ x, y, angle });
        expect(ammunition.x).toBe(outcome.x);
        expect(ammunition.y).toBe(outcome.y);
        expect(ammunition.angle).toBeCloseTo(outcome.angle);
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
    ]).test("should move x and y by cos and sin of %s * 16", (angle) => {
        const ammunition = makeAmmunition({ ...pos, angle });
        ammunition.move();
        expect(ammunition.x).toBeCloseTo(pos.x + (16 * Math.cos(angle)));
        expect(ammunition.y).toBeCloseTo(pos.y + (16 * Math.sin(angle)));
    });
});