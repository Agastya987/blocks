var fixedRect,object1;
var gamobject1;
var gamobject2;
var gamobject3;
var gamobject4;

function setup() {
  createCanvas(1200,800);

  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="red";
  movingRect.debug=true;

  gameobject1 =createSprite(100,300,80,30);
  gameobject1.shapeColor="red";
  gameobject1.debug=true;

  gameobject2 =createSprite(200,300,80,30);
  gameobject2.shapeColor="red";
  gameobject2.debug=true;
  
  gameobject3 =createSprite(300,300,80,30);
  gameobject3.shapeColor="red";
  gameobject3.debug=true;

  gameobject4 =createSprite(400,300,80,30);
  gameobject4.shapeColor="red";
  gameobject4.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if( isTouching(gameobject1,movingRect)){
  gameobject1.shapeColor="green";
  movingRect.shapeColor="green";

 }
 else{
  gameobject1.shapeColor="red";
  movingRect.shapeColor="red";
 }
 if( isTouching(gameobject2,movingRect)){
  gameobject2.shapeColor="green";
  movingRect.shapeColor="green";

 }
 else{
  gameobject2.shapeColor="red";
  movingRect.shapeColor="red";
 }
 if( isTouching(gameobject3,movingRect)){
  gameobject3.shapeColor="green";
  movingRect.shapeColor="green";

 }
 else{
  gameobject3.shapeColor="red";
  movingRect.shapeColor="red";
 }
  drawSprites();

}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.width/2+object1.width/2
    &&object2.y-object1.y<object2.width/2+object1.width/2){
   return true;
  }
  else{
  return false;
  }
  
}