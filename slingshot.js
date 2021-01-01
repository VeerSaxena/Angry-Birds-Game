class Slingshot{
    constructor(bird, log6){
        //JSON { key: value, key1: value}
        var options = {
            bodyA: bird,
            bodyB: log6,
            length: 5,
            stiffness: 0.2
        }

        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);   
    }

    display(){
        var pointA = this.sling.bodyA.position; // bird body
        var pointB = this.sling.bodyB.position;

        push ();
        //line between two body (x, y)
        //line(x1, y1, x2, y2)
        strokeWeight (4);
        fill ("brown");
        line (pointA.x, pointA.y, pointB.x, pointB.y);
        pop ();
    }
    
   
}