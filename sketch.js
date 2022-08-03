const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle = 60;
var poly;
var rock;
var wall;
var wedge;
var cesta, cestaIMG;
var quadra, quadraIMG;
var arremessador, arremessadorIMG;
var obstaculo;
var cannon;

function preload() {
  quadraIMG = loadImage("quadra.jpg")
  cestaIMG = loadImage("cesta.png")
  arremessadorIMG = loadImage("arremessador.png")
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  var ground_options = {
    isStatic: true
  }

  var rock_options = {
    restitution: 0.85
  }

  cesta = createSprite(width - 1360, height - 390, 40, 40)
  cesta.addImage(cestaIMG)
  cesta.scale = 0.2

  // rock = Bodies.circle(300, 20, 10, rock_options);
  // World.add(world, rock);

  // ball = Bodies.circle(100, 10, 20, ball_options);
  // World.add(world, ball);

  // wall = Bodies.rectangle(300, 200, 200, 20, ground_options);
  // World.add(world, wall);

  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  wedge = Bodies.rectangle(100, 200, 100, 20, ground_options);
  World.add(world, wedge);

cannon = new Cannon(width - 340, height - 390)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  Engine.update(engine);

  image(quadraIMG, 0, 0, windowWidth, windowHeight)

  // ellipse(rock.position.x, rock.position.y, 10);
  // ellipse(ball.position.x, ball.position.y, 20);
  // rect(ground.position.x, ground.position.y, 400, 20);
  // rect(wall.position.x, wall.position.y, 200, 20);

  // Matter.Body.rotate(wedge, angle);
  // push()
  // translate(wedge.position.x, wedge.position.y);
  // rotate(angle);

  // rect(0, 0, 100, 20)
  // pop();
  // angle += 0.1
  // rect(wall.position.x, wall.position.y, 70, 20);


  drawSprites()



  cannon.display()
}

