// Broken Basic OO Pong
// by Pippin Barr
//
// A broken primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles

//////////////////////////////////////////////////// FIX
// typo with bal, we are supposed to write ball
var ball;
var leftPaddle;
var rightPaddle;

// setup()
//
// Creates the ball and paddles
function setup() {
////////////////////////////////////////////////////// FIX
// typo with crateCanvas, supposed to write createCanvas
  createCanvas(640,480);
  noStroke();
  // Create a ball
/////////////////////////////////////////////////////// FIX
// lower velocity of the ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls

  ///////////////////////////////////////////////////////// FIX
  // the height of this paddle was off, I deceased the height from 600 to 60
  // and
  // the up arrow and down arrow are reversed
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW);

  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively

  ///////////////////////////////////////////////////// FIX
  // missed a parenthese
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);

///////////////////////////////////////////////////// FIX
// Missed a curly bracket for setup()
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  /////////////////////////////////////////////// FIX
  // Missed a curly brackets
  // and
  //ball.isOffThe Screen() is not the right function, the ball.isOffScreen
  // is the right function

  if (ball.isOffScreen()) {
    ////////////////////////////////////////////// FIX
    // missed adding the ball to reset
    ball.reset();
  }


  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();

////////////////////////////////////////////////////// FIX
// Missed a closing parenthese
  rightPaddle.display();
}
