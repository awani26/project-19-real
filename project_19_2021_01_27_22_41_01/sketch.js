var runner, runnerImg, track, trackImg, cone, coneImg

function preload(){
 runnerImg = loadImage("animated-running-cliparts.html");
  trackImg = loadImage("illustration-ofracing-track-vector-2362217.html");
 // coneImg = loadImage("traffic+cone+vector.html");
}

function setup() {
 createCanvas(600,600);
   track= createSprite(400,300);
  track.addImage("track",trackImg);
  track.velocityY= 1;
   coneGroup = new Group();
  runner= createSprite(200,200,50,50);
  //runner.scale=0.3;
  runner.addImage("runner",runnerImg);
  
}

function draw() {
  
   background(0);
  if (track.y>400){
    track.y=300;
  }
  if(keyDown("space") && runner.y >= 159) {
      runner.velocityY = -12;
    }
  runner.velcoityY=runner.velocityY+0.8;
  if (coneGroup.isTouching(runner)){
    runner.velocityY=0;
  }
  spawnCone();
  drawSprites();
}

function spawnCones() {
  if(frameCount % 60 === 0) {
    var cone = createSprite(width,height-100,10,40);
    //obstacle.debug = true;
    cone.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: cone.addImage(obstacle1);
              break;
      case 2: cone.addImage(obstacle2);
              break;
      case 3: cone.addImage(obstacle3);
              break;
      case 4: cone.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}






