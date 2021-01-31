const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var platform;
var bgroundImage;
var gameState = "onSling";
var score = 0;
var birds = [];
var bird1, bird2, bird3, bird;

function preload() {
    bgroundImage = loadImage('sprites/bg.png');
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20)
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2); 

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200, 50);
    bird1 = new Bird(150, 255);
    bird2 = new Bird(100, 255);
    bird3 = new Bird(50, 255);

    
    birds.push(bird3);
    birds.push(bird2);
    birds.push(bird1);
    birds.push(bird);
   

    //to access last item of the bird
    //objectName = new ClassName ();
    slingshot = new Slingshot(birds[birds.length - 1].body, { x: 200, y: 50 });

}

function draw() {
    if (bgroundImage) {
        background(bgroundImage);
    } else {
        background("white");
    }

    Engine.update(engine);

    fill("white");
    textSize(32);
    text("Score: " + score, 900, 40);

    //console.log(box2.body.position.x);
    
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    //score is the method of pig class
    pig3.score();
    log3.display();
    

    box5.display();
    log4.display();
    log5.display();

    bird.display();
   
    bird1.display();
    bird2.display();
    bird3.display();
    
    slingshot.display();
    getTime();
    //log6.display();
}
function mouseDragged() {
    if (gameState === "onSling") {
        Matter.Body.setPosition(birds[birds.length - 1].body, { x: mouseX, y: mouseY });
    }
}

function mouseReleased() {
    slingshot.fly();
    birds.pop ();
    gameState = "launched";
}

function keyPressed() {
    if (keyCode === 32) {
        // to solve memory leak/ wastage of memory
        birds[birds.length - 1].trajectory = [];
        Matter.Body.setPosition(birds[birds.length - 1].body, { x: 200, y: 50 });
        //make the bird go to original pos before attaching to sling

        //to attach bird back to slingshot
        slingshot.attach(birds[birds.length - 1].body);
        gameState = "onSling"
    }
}

async function getTime() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;
    var hour = dateTime.slice(11, 13);
    if (hour > 06 && hour < 17) {
        bg = "sprites/bg.png";
    } else {
        bg = "sprites/bg2.jpg";

    }
    bgroundImage = loadImage(bg);
}