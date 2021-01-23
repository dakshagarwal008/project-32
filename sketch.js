
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

var  block1, block2, block3, block4, block5, block6, block7,
block8, block9, block10, block11, block12, block13, block14;

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,590,1200,20)

	block1 = new Block(700,500,70,70);
	block2 = new Block(700,430,70,70);
	block3 = new Block(700,360,70,70);
	block4 = new Block(700,290,70,70);
	block5 = new Block(700,220,70,70);
	block6 = new Block(700,150,70,70);
	block7 = new Block(700,80,70,70);

	block8 = new Block(800,500,70,70);
	block9 = new Block(800,430,70,70);
	block10 = new Block(800,360,70,70);
	block11 = new Block(800,290,70,70);
	block12 = new Block(800,220,70,70);
	block13 = new Block(800,150,70,70);
	block14 = new Block(800,80,70,70);

	block15 = new Block(750,300, 30,400)

	ball = new Ball(500,300,80);

	rope = new Rope(ball.body,{x:500,y:50})
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.run(engine);
  
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  
  block15.display();

  ball.display();

  rope.display();
	
}

function mouseDragged(){

	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}
