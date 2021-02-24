
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  bob1 = new Bob(160,600,60,60)
  bob2 = new Bob(280,600,60,60)
  bob3 = new Bob(400,600,60,60)
  bob4 = new Bob(520,600,60,60)
  bob5 = new Bob(640,600,60,60)
  roof = new Roof(400,100,600,50)


	Engine.run(engine);

  rope1 = new Rope(bob1.body,{x:160, y:600});
  rope2 = new Rope(bob2.body,{x:280, y:600});
  rope3 = new Rope(bob3.body,{x:400, y:600});
  rope4 = new Rope(bob4.body,{x:520, y:600});
  rope5 = new Rope(bob5.body,{x:640, y:600});
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();


  drawSprites();

  

}



