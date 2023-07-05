class Collider {
    constructor (type, position, dimension1, dimension2) {
        this.type = type;
        if (type === "CIRCLE") {
            this.x, this.y = position;
            this.radius = dimension1;
        }
        else if (type === "RECTANGLE") {
            this.x, this.y = position;
            this.height = dimension1;
            this.width = dimension2;
        }
        else {
            throw new Error("Collider type not implemented")
        }
    }

    isCollision(other) {
        if (this.type === other.type) {
            if (this.type === "CIRCLE") {
                return this.isCollisionCircles(other);
            }
            if (this.type === "RECTANGLE") {
                return this.isCollisionRectangles(other);
            }
            throw new Error("Collider type not implemented");
        }
        else {
            if (this.type === "CIRCLE" && other.type === "RECTANGLE") {
                return this.isCollisionCircleRectangle(other);
            }
            else if (this.type === "RECTANGLE" && other.type === "CIRCLE"){
                return other.isCollisionCircleRectangle(this);
            }
            throw new Error("Collider type not implemented");
        }
    }
    
    isCollisionCircles(other) {
        radSum = this.radius + other.radius;
        xDiff = this.x - other.x;
        yDiff = this.y - other.y;
        return xDiff**2 + yDiff**2 < radSum**2;
    }

    isCollisionRectangles(other) {
        xDiff = Math.abs(this.x - other.x);
        xAllowance = this.width / 2 + other.width /2;
        yDiff = Math.abs(this.y - other.y);
        yAllowance = this.height / 2 + other.height / 2;
        return (xDiff < xAllowance && yDiff < yAllowance);
    }

    isCollisionCircleRectangle(other) {
        xDiff = abs(this.x - other.x);
        yDiff = abs(this.y - other.y);
        //difference too big
        if (xDiff < this.radius + other.width / 2 && yDiff < this.radius + other.height / 2) {
            //circle intersects rectangle edge
            if (xDiff < other.width / 2 || yDiff < other.height / 2) {
                return true;
            }
            //circle intersects rectangle corner
            if ((xDiff - other.width / 2)**2 + (yDiff - other.height / 2)**2 < 1){
                return true;
            }
        }
        return false;
    }
}
