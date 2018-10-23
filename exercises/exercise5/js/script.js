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
///////////////// NEW ///////////////////////////////////////////////////////////

var rightScore = 255;
var leftScore = 255;

///////////////// END NEW /////////////////////////////////////////////////////


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
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

//////////////////////////// NEW //////////////////////////////////////////////

// Challenge 02:
// Display the score
// Each time that one side scores a point, the other will lose opacity in
// their hp square

// Right Side square HP
push();
fill(rightScore);
rect(360, 30, 40, 40);
noStroke();


// Left Side square HP
fill(leftScore);
noStroke();
rect(280, 30, 40, 40);
pop();


///////////////// END NEW /////////////////////////////////////////////////////


  if (ball.isOffScreen()) {
    /////////////////////////// NEW ///////////////////////////////////////////////

    // Help keeping track of which side scores a point
      if (ball.x + ball.size < 0){
        // Right side scores
        console.log("Right side scores a point");
        leftScore = leftScore - 25;
        leftScore = constrain(leftScore, 0, 255);

      }
      else if (ball.x > width){
        console.log("Left side scores a point");
        rightScore = rightScore - 25;
        rightScore = constrain(rightScore, 0, 255);
      }

      // The state of the game will reset based on who wins
      if (rightScore === 0 ) {
        console.log("Right side wins");
        rightPaddle.reset();
        leftPaddle.reset();
        ball.reset();
        rightScore = 255;
        leftScore = 255;
      }

      else if (leftScore === 0){
        console.log("Left side wins");
        rightPaddle.reset();
        leftPaddle.reset();
        ball.reset();
        rightScore = 255;
        leftScore = 255;
      }
      /////////////////////////// END NEW ///////////////////////////////////////////////

    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();
}
