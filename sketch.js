//Code by Janhavi Srivastava

function preload(){
  trex_running= loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage= loadImage("ground2.png")
}
function setup(){
  createCanvas(600,200)
  trex = createSprite(40,160,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.6 // 1 is normal

  ground=createSprite(0,180,600,10)
  ground.addImage(groundImage)

  invisibleGround=createSprite(0,185,400,10)
  invisibleGround.visible= false
}

function draw(){
  background(220)

  ground.velocityX=-3

  if(ground.x<0){ //khatam ho raha
    ground.x=200 //re-new
  }

  if(keyDown("space") && trex.y>100){
    trex.velocityY=-10
  }
  trex.velocityY+=0.5

  trex.collide(invisibleGround)
  drawSprites()
}