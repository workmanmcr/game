import App from '../bs/App';

export function drawPlayer(p, player) {
    p.fill(255);
    p.stroke(0);
    p.push();
    p.translate(player.pos.x, player.pos.y);
    p.rotate(player.angle);
    p.rect(0, 0, App.unit, App.unit);

    for (let bullet of player.bullets) {
        bullet.move();
        drawBullet(p, bullet);
    }
}


function drawBullet(p, bullet) {
    const size = App.unit / 4;
    p.fill(0);
    p.noStroke();
    p.circle(bullet.x, bullet.y, size);
}

export function drawCreature(p, creature) {
    p.fill(creature.color);
    p.push();
    p.translate(creature.pos.x, creature.pos.y);
    p.rotate(creature.angle);
    p.rect(0, 0, App.unit, App.unit);
    p.pop();

    for (let sting of creature.stings) {
        sting.move();
        drawSting(p, sting);
    }
}

function drawSting(p, sting) {
    const size = App.unit / 4;
    p.noFill();
    p.stroke(0);
    p.strokeWeight(3);
    const xHalf = size * Math.cos(sting.angle);
    const yHalf = size * Math.sin(sting.angle);
    p.line(sting.x + xHalf, sting.y + yHalf, sting.x - xHalf, sting.y - yHalf);
}