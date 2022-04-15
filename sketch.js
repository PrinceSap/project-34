
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var shooter;
var ballShooter;
var button;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new shooter(width / 2 + 80, height / 2 - 80, 80, 80);
  shooter = new shooter(width / 2 - 50, height / 2 + 50, 150, 20);
  ballShooter = new ballShooter(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Click to shoot");
  button.position(width / 2, height - 100);
  button.class("ballShooterbutton");

  button.mousePressed(shoot);

}

function draw() {
  background(59);
  Engine.update(engine);

  shooter.show();
  ball.show();
  ballShooter.show();
}

function shoot() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
}

