class Bob { 
    constructor(x,y,r){
    
    var options = {
        isStatic: false,
        restitution : 1.1,
        friction : 0,
        density : 2.0
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Matter.Bodies.circle(this.x, this.y, this.r/2, options);
    World.add(world,this.body);
   
   
    
    }
    
    display(){
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        strokeWeight(2);
		fill(0,255,0)
        ellipse(0,0,this.r,this.r);
        
        pop()
    }
}