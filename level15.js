function level15(){
    man.visible = true;
    man.velocityX = 2;
    background1.velocityY = 0;
    drawSprites();
    if(man.x!==  windowWidth/2+420){
        image(helipadImg, windowWidth/2+330,windowHeight/2-300);
        image(helicopterImg, windowWidth/2+400, windowHeight/2-250);
    }else{
        Level =2;
        background1.destroy();
        man.destroy();
        background2.visible=true;
        helicopter.visible=true;   
        
    }
}