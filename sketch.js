var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, fadaIMG, som, fundo

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaIMG = loadImage("images/fairyImage1.png","images/fairyImage2.png");
    som = loadSound("sound/JoyMusic.mp3")
    fundo = loadImage("images/starNight.png")
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    som.play();
    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(100,500);
    fada.addImage(fadaIMG);
    fada.scale = 0.2

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
   background(fundo)
   
    if(keyCode == LEFT_ARROW){
        fada.x = fada.x - 10
    }
    if(keyCode == RIGHT_ARROW){
      fada.x = fada.x + 10
  }
  if(star.y == 470 ){
    star.velocityY = 0
  }else if(keyCode == DOWN_ARROW){
    star.velocityY = 4
}

 
    
    drawSprites()
}
