// Basic OO Pong
// by Pippin Barr
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;

///////////////////////////////////////// NEW ////////////////////////////
// Adding a variable for each sides HP Bar
var rightHP = 255;
var leftHP = 255;

// Variables for HP bars to turn red
var rightR = 0;
var leftR = 0;

///////////////////////////////////////// END NEW ////////////////////////
///////////////////////////////////////// NEW  ///////////////////////////
// Setting up the variables for the game to start
var gameStart = false;
////////////////////////////////////// END NEW ///////////////////////////


// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
/////////////////////////////////// NEW /////////////////////////////
// Change the color of the background
  background(0,0,100);
//////////////////////////////// END NEW ///////////////////////////

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  /////////////////////////////// NEW //////////////////////////////////////
  // Challenge 1: Improve the game
  //Setting up the HP bars for each side

  //Right side HP

  fill(rightR,rightHP,0);
  rect(440, 30, 40, 40);
  noStroke();



  // Left Side HP

  fill(leftR,leftHP,0);
  rect(140, 30, 40, 40);
  noStroke();



  ///////////////////////////// END NEW ///////////////////////////////////

  if (ball.isOffScreen()) {
    if (ball.x + ball.size < 0){
      ////////////////////////////// NEW ///////////////////////////////////
      //Challenge 1: Improve the game
      // Adding a score system
      // Right side score
      console.log("Right side scores a point");
      leftHP = leftHp - 25;
      leftHP =constrain(leftHP, 0, 255);
      leftR = leftR + 25;
      leftR = constrain(leftR, 0, 255);


    }
    else if (ball.x > width){
      // Left side score
      console.log("Left side scores a point");
      rightHP = rightHP - 25;
      rightHP = constrain(rightHP,0, 255);
      rightR = rightR + 25;
      rightR = constrain(rightR, 0, 255);

    }
    //Challenge 3: Add an ending
    // Adding an ending to the game:
    // when there is no green and the rectangle turns red
    // the game is over
    if (rightHP === 0){
      console.log("Right side wins");
      rightPaddle.reset();
      leftPaddle.reset();
      ball.reset();
      rightHP = 255;
      rightR = 0;
      leftHp = 255;
      leftR = 0;
    }
    else if (leftHP === 0) {
      console.log("Left side wins");
      rightPaddle.reset();
      leftPaddle.reset();
      ball.reset();
      rightHP = 255;
      rightR = 0;
      leftHp = 255;
      leftR = 0;

    }
    ////////////////////////// END NEW //////////////////////////////////
    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();
}
