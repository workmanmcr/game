// import each from 'jest-each';
import Player from './../src/js/bs/Player.js';

describe("Player", () => {
    test('it should create player class', () => {
        const x = 1;
        const y = 1;
        const player = new Player(x, y);
        expect(player.x).toBe(1);
        expect(player.y).toBe(1);
        expect(player.dx).toBe(0);
        expect(player.dy).toBe(0);
        expect(player.speed).toBe(2);
        expect(player.health).toBe(3);
        expect(player.size).toBe(1);
    });
});

/*
Player
    Collision Detector -> edge of map, object
    - controls and move
    - shoots
    - hits
    => send out: location (Enemy, Collision Detector) health, lives (UI)

x, y
dx, dy
speed

size

health








(angle) graphic face a direction
*/