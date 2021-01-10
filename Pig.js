class Pig extends BaseClass {
    constructor(x, y) {
      super(x, y, 50, 50); // constructor of parent
      this.image = loadImage("sprites/enemy.png");
      this.visibility = 255
    }

    display(){
      
      console.log(this.body.speed);
       if(this.body.speed < 3){
      super.display()// display of parent class inherited
   
       }
       else{
        World.remove(world, this.body);
        push (); // to add settings to pig body
       
       this.visibility = this.visibility -5;
       tint (255 , this.visibility);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop (); // to restore the original settings
       }
      
    }

  };
  