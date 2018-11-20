/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup
var ball1;
var ball2;

// You can add more balls by setting a other variable
function setup() {

  createCanvas(640,480);
  ball1 = new Ball(100,100,5,5,10,10);
  ball2 = new Ball(200,100,5,5,10,10);

}

function draw(){
background(0);

ball1.x = width/2;

ball1.update();
ball1.display();

ball2.update();
ball2.display();


}
