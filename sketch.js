var paper;
var ground;
var box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){

}

function setup() {
	createCanvas(1365,500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(682,450,1365,100);
  
  box = new Dustbin(1000,335,150,20);
  
  paper = new Paper(300,390,70);

	Engine.run(engine);
  
}


function draw() {
  background(230);
  
  paper.display();
  ground.display();
  box.display();
  
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:215,y:-215})
  }
}



