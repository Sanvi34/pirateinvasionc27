const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  tower=new Tower(150,450,160,310);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a new keyword to create a tower object.(challenge 4)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//display tower(challenge 4)
  tower.display();
}

