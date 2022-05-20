const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    ground=new Ground(600,385,1200,20);
    box2=new Box(900,300,70,70);
    Pig1=new Pig(800,300,50,50);
    Log1=new Log(800,250,300,PI/2)
    box3 = new Box(700,200,70,70);
    box4 = new Box(900,200,70,70);
    Pig2=new Pig(800,200,50,50);
    Log2=new Log(800,150,300,PI/2)
    box5 = new Box(800,100,70,70);
    Log3=new Log(720,50,150,PI/7)
    Log4=new Log(880,50,150,-PI/7)
    Bird1=new Bird(400,300);

}

function draw(){
    background("White");
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
   Pig1.display();
   Log1.display();
   box3.display();
   box4.display();
   Pig2.display();
   Log2.display();
   box5.display();
   Log4.display();
   Log3.display();
   Bird1.display();
}
