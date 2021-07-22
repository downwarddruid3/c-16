var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  appleImg = loadImage("apple.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

 
  //add select condition to spawn leaves / apples
  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if (select_sprites ==1) {
      createApples()
    }
    else{
      createLeaf()
    }
  }  
  
  drawSprites();
}


//create a function to spawn apples 
function createApples()  {
  apple = createSprite(random(50, 350),40, 10 , 10)
  apple.addImage(appleImg);
  apple.scale=0.1
  apple.velocityY=2;
  apple.lifetime=500
}

//create a function to spawn leaves
function createLeaf()  {
  leaf = createSprite(random(50, 350),40, 10 , 10)
  leaf.addImage(leafImg);
  leaf.scale=0.1
  leaf.velocityY=2;
  leaf.lifetime=63
}
