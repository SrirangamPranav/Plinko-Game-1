
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 150;
var base;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for(var h= 0; h <= width; h = h+ 80){
		divisions.push(new division(h, height-divisionHeight/2, 10, divisionHeight));
	}
	for(var i = 10; i <= width; i = i +40){
		plinkos.push(new Plinko(i, 180,10));
	}
	for(var i = 50; i <= width; i = i + 40){
		plinkos.push(new Plinko(i,80, 10));
	}
	for(var i = 10; i <= width; i = i + 40){
		plinkos.push(new Plinko(i, 380, 10));
	}
	for(var i = 50; i <= width; i = i + 40){
		plinkos.push(new Plinko(i, 280, 10));
	}
	for(var i = 50; i <= width; i = i + 40){
		plinkos.push(new Plinko(i,480, 10));
	}

	

	 ground = new division(240, 795, 480, 10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(frameCount%35===0){
	particles.push(new Particle(random(30,450), 10, 10))
	}
  Engine.update(engine);
  
  drawSprites();
  for(var j = 0; j < particles.length; j++){ 
    particles[j].display();
  }
  for(var h = 0; h < divisions.length; h++){ 
    divisions[h].display();
  }
 for(var i = 0; i < plinkos.length; i++){ 
    plinkos[i].display();
  }
	ground.display();
}


