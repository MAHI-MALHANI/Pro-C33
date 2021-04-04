var Engine = Matter.Engine;
  World = Matter.World;
  Events = Matter.Events;
  Bodies = Matter.Bodies;
 
var particles = [];
var particle;
var count=0;
var plinkos = [];
var divisions=[];
var height;

var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
      
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(35);
  text("Score:"+score, 20, 40);
  fill("white");

  text("500", 10, 550);
  text("500", 90, 550);
  text("500", 170, 550);
  text("500", 250, 550);
  text("250", 330, 550);
  text("250", 410, 550);
  text("250", 490, 550);
  text("125", 570, 550);
  text("125", 650, 550);
  text("75", 740, 550);

  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
      score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();

     if(particle.body.position.y>760){

      if(particle.body.position.x<400){
        score=score+500;
        particle=null;
      }
     }
   }

   if(particle!=null){
    particle.display();

    if(particle.body.position.x>301){

     if(particle.body.position.x<600){
       score=score+250;
       particle=null;
     }
    }
  }
}

function mousePressed(){
  if(gameState!=="end"){
    particle=new Particle(mouseX, 10, 10, 10);
  }
}