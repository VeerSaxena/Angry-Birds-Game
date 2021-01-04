class Bird extends BaseClass{
    constructor(x, y) {
     super(x, y, 50, 50) // is the constructor of parent class
      this.image = loadImage("sprites/bird.png");
     
    };
    display(){
      super.display(); // accessing parent's display
      var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
    };
  };
  