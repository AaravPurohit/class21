var red,chuck,boomerang,ladyegg

















function setup() {
  createCanvas(800,400);
  red=createSprite(200,100,50,100)
  red.shapeColor="red"
  red.debug=true
  chuck=createSprite(500,200,50,50)
  chuck.shapeColor="yellow"
  chuck.debug=true
  boomerang=createSprite(300,150,50,0)
boomerang.shapeColor="darkgreen"
boomerang.debug=true
ladyegg=createSprite(600,100,50,0)
ladyegg.shapeColor="white"
ladyegg.debug=true


}

function draw() {

  background("black");  
  chuck.x=mouseX
  chuck.y=mouseY
  if(isTouching(chuck,red)){
    
red.shapeColor="blue";
  }
   else{  red.shapeColor="red"}
  
   if(isTouching(chuck,boomerang)){

    boomerang.shapeColor="cyan";
   }
   else{ boomerang.shapeColor="darkgreen"}

if(isTouching(chuck,ladyegg)){

ladyegg.shapeColor="pink"
}

else{ladyegg.shapeColor="white"}
  drawSprites();
}