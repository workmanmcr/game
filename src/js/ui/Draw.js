function drawPlayer(player) {
    fill(255);
    stroke(0);
    push();
    translate(player.pos.x, player.pos.y);
    rotate(player.angle);
    rect(0, 0, app.unit, app.unit);

    for (let bullet of player.bullets) {
        bullet.move();
        drawBullet(p, bullet);
    }
}


function drawBullet(bullet) {
    const size = app.unit / 4;
    fill(0);
    noStroke();
    circle(bullet.x, bullet.y, size);
}

function drawCreature(creature) {
    fill(creature.color);
    push();
    translate(creature.pos.x, creature.pos.y);
    rotate(creature.angle);
    rect(0, 0, app.unit, app.unit);
    pop();

    for (let sting of creature.stings) {
        sting.move();
        drawSting(p, sting);
    }
}

function drawSting(sting) {
    const size = app.unit / 4;
    noFill();
    stroke(0);
    strokeWeight(3);
    const xHalf = size * Math.cos(sting.angle);
    const yHalf = size * Math.sin(sting.angle);
    line(sting.x + xHalf, sting.y + yHalf, sting.x - xHalf, sting.y - yHalf);
}