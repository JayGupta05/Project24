var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var paper,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	fill("red");
	paper = new Paper(200,300);
	dustbin1 = new Dustbin(500,320,20,100);
	dustbin2 = new Dustbin(600,360,220,20);
	dustbin3 = new Dustbin(700,320,20,100);
	ground = new Ground(400,390,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55})
	}
}



