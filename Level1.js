function level1(){
    if(Gamestate === "play"){
      Gamecounter++;
      
      if(Gamecounter > 1400){
        bike.destroy()
    
        obstacleGroup.destroyEach()
        peopleGroup.destroyEach()
    
        Level = 1.5;
        
              
      }
      
      if(background1.y > 450){
          background1.y = 400
      }
      background1.velocityY = 18;
      
      if(keyDown("left")){
        bike.x -=15;
      }
      if(keyDown("right")){
        bike.x +=15;
      }
      if(bike.x< windowWidth/2 -300){
        bike.x = windowWidth/2 -300
      }
      if(bike.x> windowWidth/2 + 300 ){
        bike.x= windowWidth/2 + 300
      }
            
      spawnObstacles()
      spawnPeople()
      
      if(bike.isTouching(obstacleGroup)){
      
      Gamestate = "End";
      
      }
      if(bike.isTouching(peopleGroup)){

        Gamecounter-= 100

      }
        }
       
      drawSprites();
      if(Gamestate === "End"){
        background1.velocityY = 0;
        bike.velocityX = 0;
        obstacleGroup.setVelocityYEach(0);
        obstacleGroup.setLifetimeEach(-1);
        peopleGroup.setVelocityYEach(0);
        peopleGroup.setLifetimeEach(-1);
        fill("red");
        stroke("yellow");
        strokeWeight(10)
        textSize(40);
        text('GAME OVER', windowWidth/2-100, windowHeight/2-200)
        fill("blue");
          textSize(15);
          
        text("Press 'R' To Restart",windowWidth/2-100, windowHeight/2-100)
        Gamecounter = 0
        
      }
      if(keyDown("R") && Gamestate === "End"){
      
      Gamestate = "restart"
      
      }
      if(Gamestate === "restart"){
                
      obstacleGroup.destroyEach();
      peopleGroup.destroyEach();
      Gamestate = "play"
      
      }
  }
  function spawnObstacles() {
    if(frameCount % 20 === 0) {
      var obstacle = createSprite(Math.round(random(windowWidth/2 -250,windowWidth/2+250)), -10,10,40);
      //obstacle.debug = true;
      obstacle.velocityY = 18;
      
      //generate random obstacles
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: obstacle.addImage(barImg)
        obstacle.scale = 1.2;
        obstacle.setCollider("rectangle",0,0,60,40)
                break;
        case 2: obstacle.addImage(crashImg)
        obstacle.scale = 0.6;
        obstacle.setCollider("rectangle",0,0,400,150)
                break;
        case 3: obstacle.addImage(policeImg);
        obstacle.scale = 2;
        obstacle.setCollider("rectangle",0,0,30,50)
                break;
        case 4: obstacle.addImage(coneImg);
        obstacle.scale = 0.1;
        obstacle.setCollider("rectangle",0,0,70,90)
                break;
        default: break;
      }
    
      //assign scale and lifetime to the obstacle           
      
      obstacle.lifetime = 800/15 ;
      //add each obstacle to the group
     obstacleGroup.add(obstacle);
  
  
    }
  }
    function spawnPeople() {
      if(frameCount % 70 === 0) {
        var people = createSprite(Math.round(random(windowWidth/2 -250,windowWidth/2+250)), -10,10,40);
        //obstacle.debug = true;
        people.velocityY = 18;
        
        //generate random obstacles
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: people.addImage(person1)
          people.scale = .7;
          people.setCollider("rectangle",0,0,30,50)
                  break;
          case 2: people.addImage(person2)
          people.scale = .7;
          people.setCollider("rectangle",0,0,30,50)
                  break;
          case 3: people.addImage(person3);
          people.scale = .7;
          people.setCollider("rectangle",0,0,30,50)
                  break;
          case 4: people.addImage(person4);
          people.scale = .7;
          people.setCollider("rectangle",0,0,30,50)
                  break;
          case 5: people.addImage(person5);
          people.scale = .7;
          people.setCollider("rectangle",0,0,30,50)
                  break;
          default: break;
        }
       
        //assign scale and lifetime to the obstacle           
        
        people.lifetime = 800/15 ;
        //add each obstacle to the group
       peopleGroup.add(people);
    
    
      }
    }
  