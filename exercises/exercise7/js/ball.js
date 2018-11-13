/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup

var angleX = 0.0;
var angleY = 0.0;
function setup() {
  createCanvas(500,500,WEBGL);
}
function draw() {
  background(0);
  rotateY(angleY);
  box(60);
  fill(0,0,255);

  translate(50,0,50); // Translation in 3D!
  rotateX(angleX);
  box(30);
  fill(255,255,0);
  angleX += 0.01;
  angleY -= 0.01;
  box(15);
}
