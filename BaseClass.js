class BaseClass {
    constructor(x, y,width,height,angle) {
      var options = {
        'density':0.8,
        'friction': 1.0,
        'restitution':1.0
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height);
      pop();
    };
  };
  