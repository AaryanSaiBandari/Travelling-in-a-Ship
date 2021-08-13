var ship, ship_updown;
var sea, seaImage;

function preload(){
  ship_updown=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX=-4;
  sea.scale=0.6;
  
  ship=createSprite(120,250,30,30);
  ship.addAnimation("moving_ship", ship_updown);
  ship.scale=0.2;
  ship.x=120;
}

function draw() {
  background("blue");
  console.log(ship.y);
  sea.velocityX=-4;
  if (sea.x < 0) {
    sea.x = sea.width/8;
  }
  drawSprites();
}