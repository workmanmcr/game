const collider = {
    /**
     * Checks if coordinates of next position are open to move to
     * @param {Creature} object 
     * @param {Vector} next_pos 
     * @returns true if space is open
     */
    isOpenSpace: (object, next_pos) => {
        const { swarm } = game;
        for (const creature of swarm) {
            let v = object_pos.add(next_pos);
            if (creature.pos.x !== object.pos.x && creature.pos.y !== object.pos.y)
                if (v.dist(creature.pos) < app.unit)
                    return false;
        }
        return true;
    },
    /**
     * Checks if a coordinate goes out of bounds on map
     * @param {Number} coordinate 
     * @param {String} boundary : width or height
     * @returns true if coordinate passes an edge
     */
    isEdge: (coordinate, boundary = 'width') => {
        return coordinate - app.unit / 2 < 0
            || boundary === 'width' ?
            coordinate + app.unit / 2 > game.map_width
            : coordinate + app.unit / 2 > game.map_height;
    },
    isPastCheckpoint: () => {},
    isCollision: (obj_1, obj_2) => {
        return obj_1.pos.dist(obj_2.pos) <= app.unit;
    },
    /**
     * Checks if a creature has the range and line of sight to shoot player
     * @param {Creature} obj_1 
     * @returns true if obstructed or out of range
     */
    isObstructed: (obj_1) => {
        const distance = obj_1.pos.dist(player.pos);

        if (distance < app.unit * 15)
            return true;

        const angle = atan(player.pos.y - obj_1.pos.y, player.pos.x - obj_1.pos.x);

        const x1 = obj_1.pos.x < player.pos.x;
        const y1 = obj_1.pos.y < player.pos.y;
        const lowerXBound = x1 ? obj_1.pos.x : player.pos.x;
        const upperXBound = x1 ? player.pos.x : obj_1.pos.x;
        const lowerYBound = y1 ? obj_1.pos.y : player.pos.y;
        const upperYBound = y1 ? player.pos.y : obj_1.pos.y;

        for (const creature of game.swarm) {
            if (!compareObj(creature, obj_1)) {
                if (compareRange(creature, true, lowerXBound, upperXBound)) {
                    for (let i = app.unit / 2; i < distance; i++) {
                        const lower_y = obj_1.pos.y + sin(angle) * i - app.unit / 2;
                        const upper_y = obj_1.pos.y + sin(angle) * i + app.unit / 2;
                        if (
                            (creature.pos.y - app.unit / 2 < upper_y && creature.pos.y + app.unit / 2 > upper_y)
                            || (creature.pos.y - app.unit / 2 < lower_y && creature.pos.y + app.unit / 2 > lower_y)
                            || (creature.pos.y - app.unit / 2 === lower_y && creature.pos.y + app.unit / 2 === upper_y)
                        ) { return true }
                    }
                }
                else if (compareRange(creature, false, lowerYBound, upperYBound)) {
                    for (let i = app.unit / 2; i < distance; i++) {
                        const lower_x = obj_1.pos.x + cos(angle) * i - app.unit / 2;
                        const upper_x = obj_1.pos.x + cos(angle) * i + app.unit / 2;
                        if (
                            (creature.pos.x - app.unit / 2 < upper_x && creature.pos.x + app.unit / 2 > upper_x)
                            || (creature.pos.x - app.unit / 2 < lower_x && creature.pos.x + app.unit / 2 > lower_x)
                            || (creature.pos.x - app.unit / 2 === lower_x && creature.pos.x + app.unit / 2 === upper_x)
                        ) { return true }
                    }
                }
            }
        }
    },
    compareObj: (obj_1, obj_2) => obj_1.pos.x === obj_2.pos.x && obj_1.pos.y === obj_2.pos.y,
    compareRange: (obj, isX, lower, upper) => {
        const coordinate = isX ? obj.pos.x : obj.pos.y;
        return coordinate >= lower && coordinate <= upper;
    }
}
