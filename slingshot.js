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
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        World.add(world, this.sling);   
    }

    fly(){
    this.sling.bodyA = null;
    }

    attach(bird){
        this.sling.bodyA = bird;
    }

    display(){
        image(this.sling1, 200, 22);
        image(this.sling2, 170, 22);

        if(this.sling.bodyA){

        var pointA = this.sling.bodyA.position; // bird body
        var pointB = this.sling.pointB;

        push ();
        stroke (66, 39, 15);
        //line between two body (x, y)
        //line(x1, y1, x2, y2)
        
        if(pointA.x<220){
         strokeWeight (7);
       
        line (pointA.x-20, pointA.y, pointB.x-10, pointB.y);
        line (pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
        image(this.sling3, pointA.x-35, pointA.y-10, 15, 30);

        }
        else{
            strokeWeight (3);
       
        line (pointA.x-20, pointA.y, pointB.x-10, pointB.y);
        line (pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
        image(this.sling3, pointA.x-35, pointA.y-10, 15, 30);
        }
        pop ();
    }
    }
    
   
}