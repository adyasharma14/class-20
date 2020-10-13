var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(600, 400, 30, 60);
 movingRect=createSprite(400,200,40,70);

 fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";
}

function draw() {
  background(0,0,0);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
   && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
   && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
   {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green"; 
   }
   else
   {
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
   }
  drawSprites();
}