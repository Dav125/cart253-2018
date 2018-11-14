/*****************

Exercise 7 - Project 3 Prototype
by David Fong

I have no big directions for this assignment yet but
i'll think something

Oh I have an idea! the game is about catching fruits
from the air to make a fruit smoothie

Basically, you don't want to have the fruits  drop to
the ground 3 times or else it is gmame

******************/

// setup()
//
// variables for the fruits
var apple;
var orange;
var kiwi;
var banana;
var strawberry;

//variables for display the fruit
var appleImage;
var orangeImage;
var kiwiImage;
var bananaImage;
var strawberryImage;

//variable for displaying the blender
var blenderImage;

// variables for the player's avatar which is it is
// a blender
var blender;


// variable for the state of the game
var state = "start";

// Preload the images for fruits and blender
function preload() {

appleImage = loadImage("assets/images/Apple.png");
orangeImage = loadImage("assets/images/Orange.png");
kiwiImage = loadImage("assets/images/kiwi.png");
bananaImage = loadImage("assets/images/banana.png");
strawberryImage = loadImage("assets/images/strawberry.png");
blenderImage = loadImage("assets/images/Blender.png")

}


function setup() {
  createCanvas(640, 480);

  // Setting-up new fruits drop down
  // Apple
  apple = new Apple(random(0,width), height-600, 5, 50, 0.2);

  // Orange
  orange = new Orange (random(0,width), height-600, 7, 50, 0);

  // kiwi
  kiwi = new Kiwi (random(0,width), height-600, 4, 50, 0);


  // banana
  banana = new Banana (random(0,width), height-600, 2, 50, 0);

  // strawberry
  strawberry = new Strawberry (random(0,width), height-600, 6, 50, 0);

  // Setting up the player avatar blender
  blender = new Blender (width/2, height-80, 100, 10,LEFT_ARROW,RIGHT_ARROW);

}

// Start of the game
//-------------------------
// the start state of tthe game
function startScreen() {

  console.log("here is the title?") ;
  textFont("Helvetica");
  textSize(50);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(230, 10, 10);
  text("Fruit Blender", width / 2, height / 4);

  if (mouseIsPressed) {
    state = "game";
  }
}

function draw() {

  background(100, 230, 200);
  // Code for the state of the game
  switch (state) {
    case "start":
      startScreen();
      break;
    case "game":
      gameScreen();
      break;
    case "end":
      gameOver();
      break;
  }
}

// the gameplay of the game
// all the action of the actions are hapenning
// here

function gameScreen() {

blender.handleInput();

apple.display();
banana.display();
kiwi.display();
orange.display();
strawberry.display();
blender.display();

apple.update();
banana.update();
kiwi.update();
orange.update();
strawberry.update();
blender.update();

apple.isOffScreen();
banana.isOffScreen();
kiwi.isOffScreen();
orange.isOffScreen();
strawberry.isOffScreen();

apple.handleCollision(blender);
banana.handleCollision(blender);
kiwi.handleCollision(blender);
orange.handleCollision(blender);
strawberry.handleCollision(blender);




}



// the game over screen is here

function gameOver() {


}
