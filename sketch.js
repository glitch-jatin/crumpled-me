var paper1, r1,ground,launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

// gameState = "onSling";
function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	
	paper1 = new Paper();

	//Create a Ground
	ground = new Ground();

	launcher = new Launcher(paper1.body,{x:200, y:100});
	

	 r1 = new Bin(900,335,15,80);
	 r2 = new Bin(1000,315,15,120);
	 r3 = new Bin(950,370,100,15);
  
}


function draw() {
	background(0);
	
  rectMode(CENTER);
  //background(255);
  paper1.display();
  ground.display();
 
  r1.display();
 //ground.display();
 r2.display();
 r3.display();
 launcher.display();
 drawSprites();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    launcher.fly();
    //gameState = "launched";
}








