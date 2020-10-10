const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Ground1;
var engine, world


var divisionHeight = 300;
var particles = []
var divisions = []
var plinkos = []


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  Ground1 = new Ground(width/2, height, width, 30);

  for (var k =0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,75)); 
    }
    
    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
       }
       
       for (var j = 75; j <=width; j=j+50) {
          plinkos.push(new Plinko(j,275)); 
        } 
        
        for (var j = 50; j <=width-10; j=j+50) {
           plinkos.push(new Plinko(j,375)); 
          }

  
  
}


function draw() {
  Engine.update(engine);
  background(0);  

 Ground1.display();

 for (var i = 0; i < plinkos.length; i++) 
 { 
   plinkos[i].display(); 
}

if(frameCount%60 === 0){
  particles.push(new Circle(random(width/2-30, width/2+30), 10,10));
}
  
for (var j = 0; j < particles.length; j++) {
   particles[j].display(); 
  } 
  
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display(); 
    }
  
}
