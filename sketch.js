const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(40,100);
    rubber = new Rubber(100,100,30);
    rubber1 = new Rubber(400,100,30);
    rubber2 = new Rubber(500,100,30);
    iron = new Iron(200,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron.display();
    rubber1.display();
    rubber2.display();

    

    
 
}