var bgImg;
var cat;
var mouse;
function preload() {
    //load the images here

    bgImg = loadImage("images/garden.png");
    catimg1 =  loadAnimation("images/cat1.png");
    mouseimg1 =  loadAnimation("images/mouse1.png");
    catimg2 =  loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2 =  loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg3 =  loadAnimation("images/cat4.png");
    mouseimg3 =  loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse =  createSprite (200,600,50,50);
    mouse.addAnimation("mousestanding",mouseimg1);
    mouse.scale = 0.15;

    cat =  createSprite (870,600,50,50);
    cat.addAnimation("catsleeping",catimg1);
    cat.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

     if(cat.x - mouse.x < (cat.width -  mouse.width)/2) {
        cat.velocityX = 0;
        cat.addAnimation("catlastimg",catimg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catlastimg");

        mouse.addAnimation("mouselastimg",mouseimg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouselastimg");
        

     }
    drawSprites();
}
function keyPressed() {

    if(keyCode === LEFT_ARROW) {
        cat.velocityX =  -5;
        cat.addAnimation("catrunning",catimg2);
        cat.changeAnimation("catrunning"); 
        mouse.addAnimation("mouseTeasing" , mouseimg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
       
    }
}
