/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
var fruit = {
  x: 0,
  y: -50,
  vy: 2,
  angle: 0
}

var fruit2 = {
  x: 0,
  y: -50,
  vy: 1,
  angle: 0
}

function setup() {
  createCanvas(500,500);
  fruit.x = random(0,width);
  fruit2.x = random(0,width);
  rectMode(CENTER);
}

function draw() {
  background(0);
  fruit.y = fruit.y + fruit.vy;
  fruit2.y = fruit2.y + fruit2.vy;

  push();
  translate(fruit.x,fruit.y);
  rotate(fruit.angle);
  rect(0,0,20,20);
  pop();

  if (fruit.y > height) {
    fruit.y = -20;
    fruit.x = random(0,width);
  }

  push();
  translate(fruit2.x,fruit2.y);
  rotate(fruit2.angle);
  fill(255,0,0);
  rect(0,0,20,20);
  pop();

  if (fruit2.y > height) {
    fruit2.y = -20;
    fruit2.x = random(0,width);
  }

  fruit.angle += 0.2;
  fruit2.angle += 0.1;
}
