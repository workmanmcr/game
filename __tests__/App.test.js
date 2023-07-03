import App from '../src/js/bs/App';

describe("App", () => {
    test("should return unit of 16", () => {
        expect(App.unit).toBe(16);
    });

    test("should return App speed of 2", () => {
        expect(App.default_speed).toBe(2);
    });

    test("should return invalid coordinate of -100", () => {
        expect(App.invalid_coordinate).toBe(-100);
    });
})