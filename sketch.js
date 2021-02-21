var a;
var circles=[];

const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies
const Constraint= Matter.Constraint

var base1
var block1,block2,block3,block4,block5,block16,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var engine;
var polygon;
var polygonimage;
var sling;
var smallbox;

var score = 0;

function preload(){
 
}
function setup() {
  createCanvas(1000,650);
  stroke(255)
  
     engine = Engine.create()
     world = engine.world

    block1 = new Box(400,340,30,40)
    block1.score()

    block2 = new Box(370,380,30,40)
    block2.score()

    block3 = new Box(400,380,30,40)
    block3.score()

    block4 = new Box(430,380,30,40)
    block4.score()

    block5 = new Box(340,420,30,40)
    block5.score()

    block6 = new Box(370,420,30,40)
    block6.score()

    block7 = new Box(400,420,30,40)
    block7.score()

    block8 = new Box(430,420,30,40)
    block8.score()

    block9 = new Box(460,420,30,40)
    block9.score()

    block10 = new Box(310,460,30,40)
    block10.score()

    block11 = new Box(340,460,30,40)
    block11.score()

    block12 = new Box(370,460,30,40)
    block12.score()

    block13 = new Box(400,460,30,40)
    block13.score()

    block14 = new Box(430,460,30,40)
    block14.score()

    block15 = new Box(460,460,30,40)
    block15.score()

    block16 = new Box(490,460,30,40)
    block16.score()


 
    
  polygon = new Polygon(330,300,40)
    sling = new SlingShot(polygon.body,{x:50,y:230})
   

 

  base1 = new Ground(400,488,300,15)

}

function draw() {
 
  background(0);  
  
Engine.update(engine)
 
base1.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()

//smallbox.display()
sling.display()

text("score :"+score,750,40)

 polygon.display()

}


function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  sling.fly();
 
}


function keyPressed(){
  if(keyCode === 32){
    sling.attach(polygon.body);
    
  }

} 
