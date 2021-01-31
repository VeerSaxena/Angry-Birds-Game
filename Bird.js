class Bird extends BaseClass{
    constructor(x, y) {
     super(x, y, 50, 50) // is the constructor of parent class
      this.image = loadImage("sprites/bird.png");
      this.trajectory = [];
      this.smokeImg = loadImage("sprites/smoke.png");
      this.visibility = 255;  
    };
    display(){
      super.display(); // accessing parent's display
      var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var position = [pos.x , pos.y];
      push();
      if(pos.x > 220 && this.body.speed > 10){
        this.trajectory.push(position);
      }
     

      for(var i = 0;i < this.trajectory.length;i++){
        this.visibility = this.visibility - 0.5;
        tint(255, this.visibility);
        image(this.smokeImg,this.trajectory[i][0], this.trajectory[i][1] );
      }
      pop ();
    };
  };
  