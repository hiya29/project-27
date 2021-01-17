class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
            offsetX : offsetX
            offsetY : offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:offsetX,
                    y:offsetY},
            stiffness: 1,
            length: 400
        }
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){

        var anchorA = this.rope.bodyA.position + pointB;
        var anchorB = this.rope.bodyB.position + pointB;
        push()
        strokeWeight(4);
        line(anchorA.x , anchorA.y, anchorB.x, anchorB.y);
        pop()
    }

  
}