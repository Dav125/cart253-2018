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

//Setting up the variable for the game over function
var gameIsOver = false
////////////////////////////////////// END NEW ///////////////////////////
var state = "starts"

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640, 480);
  // Create a ball
  ball = new Ball(width / 2, height / 2, 5, 5, 10, 5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87);
}

function startScreen() {
  //////////////////////////////// NEW ////////////////////////////////
  // Challenge 2: Add a title
  // Before the game starts, we see the title of the game
  // when we click the screen, the game starts
  console.log("title")
  textFont("Helvetica");
  textSize(50);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(0, 255, 0);
  // The title of the game
  text("Endurance Paddle", width / 2, height / 4);

  if (mouseIsPressed) {
    state = "game";
  }


  ////////////////////////////// END NEW //////////////////////////////
}




function gameScreen() {
  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();


  //  console.log("start the game")
  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  /////////////////////////////// NEW //////////////////////////////////////
  // Challenge 1: Improve the game
  //Setting up the HP bars for each side

  //Right side HP
  push()
  fill(rightR, rightHP, 0);
  rect(440, 30, 40, 40);
  noStroke();
  pop()


  // Left Side HP
  push()
  fill(leftR, leftHP, 0);
  rect(140, 30, 40, 40);
  noStroke();
  pop();


  ///////////////////////////// END NEW ///////////////////////////////////

  if (ball.isOffScreen()) {
    if (ball.x + ball.size < 0) {
      ////////////////////////////// NEW ///////////////////////////////////
      //Challenge 1: Improve the game
      // Adding a score system
      // Right side score
      console.log("Right side scores a point");
      leftHP = leftHP - 25;
      leftHP = constrain(leftHP, 0, 255);
      leftR = leftR + 25;
      leftR = constrain(leftR, 0, 255);


    } else if (ball.x > width) {
      // Left side score
      console.log("Left side scores a point");
      rightHP = rightHP - 25;
      rightHP = constrain(rightHP, 0, 255);
      rightR = rightR + 25;
      rightR = constrain(rightR, 0, 255);

    }
    //Challenge 3: Add an ending
    // Adding an ending to the game:
    // when there is no green and the rectangle turns red
    // the game is over
    if (rightHP === 0) {
      console.log("Right side wins");
      rightPaddle.reset();
      leftPaddle.reset();
      rightHP = 255;
      rightR = 0;
      leftHP = 255;
      leftR = 0;
      state = "endGame"

    } else if (leftHP === 0) {
      console.log("Left side wins");
      rightPaddle.reset();
      leftPaddle.reset();
      rightHP = 255;
      rightR = 0;
      leftHP = 255;
      leftR = 0;
      state = "endGame"
    }
    ////////////////////////// END NEW //////////////////////////////////
    ball.reset();
  }

}
// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  /////////////////////////////////// NEW /////////////////////////////
  // Change the color of the background
  background(0, 0, 100);
  //////////////////////////////// END NEW ///////////////////////////

  //////////////////////////////// NEW ////////////////////////////////
  // Using the swith function
  switch (state) {
    case "starts":
      startScreen();
      break;
    case "game":
      gameScreen();
      break;
    case "endGame":
      gameOver();
      break;
  }
  ////////////////////////////// END NEW //////////////////////////////

}
//////////////////////////////// NEW //////////////////////////////
// Reorginizing the game over state
function gameOver() {
  // title of the game over screen
  textFont("Helvetica");
  textSize(30);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(255, 100, 100);
  text("The other player is too tired to play!", width / 2, height / 4);

  // Once the mouse is pressed, the game starts over
  if (mouseIsPressed) {
    state = "starts";

  }

}
/////////////////////////////// END NEW ///////////////////////////
