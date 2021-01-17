
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,150,800,20);

	bob1 = new Bob(0,0,50);
    bob2 = new Bob(350,550,50);
    bob3 = new Bob(400,550,50);
	bob4 = new Bob(450,550,50);
	bob5 = new Bob(500,550,50);

	rope1 = new Rope(bob1.body,roof.body,-100,0);
	rope2 = new Rope(bob2.body,roof.body,-50,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,50,0);
	rope5 = new Rope(bob5.body,roof.body,100,0); 

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	}
	);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
text(mouseX + "," + mouseY,mouseX,mouseY);

roof.display(); 

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

}



