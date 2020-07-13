var movingrect,rect;


function setup() {
  createCanvas(800,400);
  rect=createSprite(200, 200, 50, 80);
  movingrect=createSprite(400,200,80,30);
  rect.shapeColor="green";
  movingrect.shapeColor="green";
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if(movingrect.x-rect.x<movingrect.width/2+rect.width/2){
    movingrect.shapeColor="red";
    rect.shapeColor="red";
  }else{
    movingrect.shapeColor="green";
    rect.shapeColor="green";
  }

  drawSprites();
}