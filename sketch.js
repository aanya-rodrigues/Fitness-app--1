const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var login;
var canvas;
var database;
function preload(){
  bg= loadImage("login.jpeg")
}
function setup() {
  canvas = createCanvas(1200,400);
  engine = Engine.create();
  database = firebase.database();
    world = engine.world;
  login = new Login();
}

function draw() {
  background(0);
}
