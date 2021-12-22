var bgImg;
var cat;
var mouse;
var catImg1, catImg2, catImg3;
var mouseImg1, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/tomOne.png");
    catImg2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");
    catImg3 = loadAnimation("images/tomFour.png");
    mouseImg1 = loadAnimation("images/jerryOne.png");
    mouseImg2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
    mouseImg3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("ratoSentado", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("ultimaImagemGato", catImg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("ultimaImagemGato");
        
        mouse.addAnimation("ultimaImagemRato", mouseImg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("ultimaImagemRato");
    }

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("gatoCorrendo", catImg2);
      cat.changeAnimation("gatoCorrendo"); 
    
      mouse.addAnimation("ratoProvocando", mouseImg2);
      mouse.frameDelay = 25;
      mouse.changeAnimation("ratoProvocando");
      
  }

  


}