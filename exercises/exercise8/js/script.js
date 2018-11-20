/*****************

Exercise 8
David Fong

For this exercise, I'll start thinking about shooting fruits
at something

******************/

// variables for the fruits
var apples = [];
var oranges = [];
var kiwis = [];
var bananas = [];
var strawberrys = [];

//variables for display the fruit
var appleImage;
var orangeImage;
var kiwiImage;
var bananaImage;
var strawberryImage;

// variable for the state of the game

var state = "start";

//variable for the cannon avatar
var cannon;

//variable for displaying the image of the cannon
var cannonImage;




// variable for the state of the game
var state = "start";

// Preload the the images of the fruits

function preload() {

  appleImage = loadImage("assets/images/Apple.png");
  orangeImage = loadImage("assets/images/Orange.png");
  kiwiImage = loadImage("assets/images/kiwi.png");
  bananaImage = loadImage("assets/images/banana.png");
  strawberryImage = loadImage("assets/images/strawberry.png");
  cannonImage = loadImage("assets/images/Cannon.png");

}



// the start of the game

function startScreen() {

  console.log("here is the title?");
  textFont("Helvetica");
  textSize(50);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(230, 10, 10);
  text("Fruit Shooter", width / 2, height / 4);

  push()
  textFont("Helvetica");
  textSize(25);
  textAlign(CENTER, CENTER);
  noStroke();
  text("Left click to start", width / 2, height / 6);


  if (mouseIsPressed) {
    state = "game";
  }
}

//Setup
function setup() {
  createCanvas(640, 480);

  // Setting up the player avatar
  cannon = new Cannon(width / 2, height - 80, 100, 10, LEFT_ARROW, RIGHT_ARROW, 32);


}



// draw function
function draw() {
  background(200, 140, 200);
  // Using the switch function here
  switch (state) {
    case "start":
      startScreen();
      break;
    case "game":
      gameScreen();
      break;

  }


}

// The gameplay of the game
// gameScreen() function

function gameScreen() {
  // Makes sure that the cannon will shoot random amount of fruits
  for (var i = 0; i < apples.length; i++) {
    apples[i].update();
    apples[i].display();
  }
  for (var i = 0; i < oranges.length; i++) {
    oranges[i].update();
    oranges[i].display();
  }
  for (var i = 0; i < kiwis.length; i++) {
    kiwis[i].update();
    kiwis[i].display();
  }

  for (var i = 0; i < strawberrys.length; i++) {
    strawberrys[i].update();
    strawberrys[i].display();
  }
  for (var i = 0; i < bananas.length; i++) {
    bananas[i].update();
    bananas[i].display();
  }

  cannon.handleInput();
  cannon.display();
  cannon.update();


}
