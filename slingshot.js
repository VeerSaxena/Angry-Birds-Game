class Slingshot{
    constructor(bird, point){
        //JSON { key: value, key1: value}
        var options = {
            bodyA: bird,
            pointB: point,
            length: 5,
            stiffness: 0.2
        }

        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);   
    }

    fly(){
    this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){

        var pointA = this.sling.bodyA.position; // bird body
        var pointB = this.sling.pointB;

        push ();
        //line between two body (x, y)
        //line(x1, y1, x2, y2)
        strokeWeight (4);
        fill ("brown");
        line (pointA.x, pointA.y, pointB.x, pointB.y);
        pop ();
    }
    }
    
   
}