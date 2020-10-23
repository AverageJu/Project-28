
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<-lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
		launcherObject.attach(stoneObj.body);
	}
}


	detectollision(StoneObj,mango1);
	detectollision(StoneObj,mango2);
	detectollision(StoneObj,mango3);
	detectollision(StoneObj,mango4);
	detectollision(StoneObj,mango5);

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

  drawSprites();
 
}



