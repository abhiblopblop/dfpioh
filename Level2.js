
function level2(){
 
  drawSprites(); 
     if(Gamestate === "play"){
         helicopter.velocityX = -1
         if(helicopter.x <= 100){
          Gamestate = "End"
         }
          if(keyDown("up")){
            helicopter.y -=15;
          }
          if(keyDown("down")){
            helicopter.y +=15;
          }
          
          helicopter.collide(edges[2]);
          helicopter.collide(edges[3]);
          
          spawnJet()
          if(keyWentDown("space")){
            spawnMissile()
          }
         
         for(var i=0; i< jetGroup.length;i++){
             if(missileGroup.isTouching(jetGroup.get(i))){
               crashcounter = 12;
               crashx = jetGroup.get(i).x ;
               crashy = jetGroup.get(i).y -50 ;
                 jetGroup.get(i).destroy();
                 missileGroup.destroyEach();
                 jetcount++     
             } 
            }
             for(var i=0; i< jetGroup.length;i++){
              if(helicopter.isTouching(jetGroup.get(i))){
                helicopter.x -=1
              }          
             }
            if(crashcounter>0){
   
              image(boomImg, crashx,crashy,80,80);
              crashcounter--;
            }
            if(jetcount > 10){

                Gamestate = "theEnd"

            }
          
     }
       
     if(Gamestate === "End"){
     
      helicopter.velocityX = 0;
      jetGroup.setVelocityXEach(0);
      jetGroup.setLifetimeEach(-1);
      missileGroup.setVelocityXEach(0);
      missileGroup.setLifetimeEach(-1);
      fill("red");
      stroke("yellow");
      strokeWeight(10)
      textSize(40);
      text('GAME OVER', windowWidth/2-100, windowHeight/2-200)
      fill("blue");
        textSize(15);
        
      text("Press 'R' To Restart",windowWidth/2-100, windowHeight/2-100)
      jetcount = 0
      
    }
    if(keyDown("R") && Gamestate === "End"){
    
    Gamestate = "restart"
    
    }
    if(Gamestate === "restart"){
              
    jetGroup.destroyEach();
    missileGroup.destroyEach();
    helicopter.x = windowWidth-350;
    Gamestate = "play"
    
    }
   
       if(Gamestate === "theEnd"){
            helicopter.velocityX = 0;
            missileGroup.destroyEach();
            jetGroup.destroyEach();
            var createwin = createImg("dancw.gif");
            createwin.position(100,50);
            fill("green");
            stroke("blue");
            strokeWeight(10)
            textSize(60);
            text('YOU WIN', windowWidth/2+100, windowHeight/2)
            var reset = createButton("Play Again")
            reset.position(displayWidth-200, 50)
            reset.style('background-color', 'black')
            reset.style('color', 'white')
            reset.size(100,70)
            reset.mousePressed(
              function (){

                location.reload()
              }
              
            )
          
          }
          
}

function spawnJet() {
    if(frameCount % 40 === 0) {
      var jet = createSprite(-10, Math.round(random(50,650)),10,40);
     
      jet.velocityX = Math.round(random(6,10));
        
        jet.addImage(planeImg)
        jet.scale = 0.3;
        jet.setCollider("rectangle",0,0,280,180)
             
      //assign scale and lifetime to the obstacle           
      
      jet.lifetime = windowWidth/3 ;
      //add each obstacle to the group
     jetGroup.add(jet);
  
  
    }
  }
  function spawnMissile() {
   
      var missile = createSprite(helicopter.x, helicopter.y+10,10,40);
     
      missile.velocityX = -10;
        
      missile.addImage(missileImg)
        missile.scale = 0.3;
        missile.setCollider("rectangle",0,0,60,40)
             
      //assign scale and lifetime to the obstacle           
      
      missile.lifetime = 600/10 ;
      //add each obstacle to the group
      missileGroup.add(missile);
  
  
    }
  
