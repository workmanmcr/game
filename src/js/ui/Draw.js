export function drawCreature(p, creature) {
    p.fill(creature.color);
    p.push();
    p.translate(creature.pos.x, creature.pos.y);
    p.rotate(creature.angle);
    p.rect(0, 0, creature.dimension, creature.dimension);
    p.pop();

    for (let sting of creature.stings) {
        sting.move();
        drawSting(p, sting);
    }
}

function drawSting(p, sting) {
    p.fill(...sting.color);
    p.circle(sting.x, sting.y, sting.size);
}