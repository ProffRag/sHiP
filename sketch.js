var ship, shipA, seaA;
var sea;
function preload(){
  shipA=loadAnimation('ship-1.png','ship-1.png','ship-2.png','ship-1.png');
  seaA=loadImage('sea.png');

}

function setup(){
  createCanvas(400,400);
  background('blue');
  sea = createSprite(400,200);
  sea.addImage( seaA);
  sea.scale = 0.3
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation('running', shipA);
  ship.scale= 0.25
 
}                     

function draw() {
  sea.velocityX = -3;
  background(0);
  if(sea.x<0){
  sea.velocityX=sea.width/2}
  drawSprites() 
}