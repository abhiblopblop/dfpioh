var background1,background2, background1Img,background2Img;
var bike,bikeImg;
var edges;
var crashImg,barImg,coneImg,policeImg;
var obstacleGroup
var Gamestate
var Gamecounter
var Level
var peopleGroup
var jetcount = 0;
var canvas;
var crashcounter = 1;
var crashx,crashy;
function preload(){

  background1Img = loadImage("road.png");
  bikeImg = loadImage("bike.png")
  barImg = loadImage("barricade.png");
  crashImg = loadImage("car crash.png");
  coneImg = loadImage("traffic cone.png");
  policeImg = loadImage("police car1.png");
  person1 = loadImage("people1.png");
  person2 = loadImage("people2.png");
  person3 = loadImage("people3.png");
  person4 = loadImage("people4.png");
  person5 = loadImage("people5.png");
  background2Img = loadImage("cloud.png")
  missileImg = loadImage("missile.png")
  helicopterImg = loadImage("helicopter.png")
  planeImg = loadImage("jet (2).png")
  boomImg = loadImage("BoomImg.png")
  helipadImg = loadImage("helipad.png")
  manImg = loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png","r6.png","r7.png","r8.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background1 = createSprite(windowWidth/2, windowHeight/2,50,50);
  background1.addImage("road",background1Img);
  background1.scale = 1.85;

  background2 = createSprite(windowWidth/2, windowHeight/2,  windowWidth,windowHeight);
  background2.addImage("clouds",background2Img);
  background2.scale = 5.25;
  background2.visible = false;
  
  edges= createEdgeSprites();
  obstacleGroup = new Group()
  peopleGroup = new Group()
  missileGroup = new Group()
  jetGroup = new Group()
  
 bike = createSprite(windowWidth/2+100, windowHeight-50, 50, 50);
  bike.addImage("bikeImg", bikeImg)
  bike.scale =0.28;
  bike.debug = true
  bike.setCollider("rectangle",0,0,40,250)
  
  helicopter = createSprite(windowWidth-250, windowHeight/2, 50, 50)
  helicopter.addImage("helicopterImg", helicopterImg)
  helicopter.scale = 0.4
  helicopter.visible = false

  man = createSprite(windowWidth/2, windowHeight/2-150)
  man.addAnimation("man",manImg);
  man.scale = 0.3;
  man.visible = false;

  Gamestate = "play"
  Gamecounter = 0
  Level = 1
  
}

function draw() {
 
if(Level === 1){
 background(0);  
 level1() ;
 console.log(Gamecounter)

}
if(Level === 1.5){
  background(0);    
        level15() ;
             
}
if(Level === 2){
  background("lightblue");       
        level2() ;
             
}

}    
