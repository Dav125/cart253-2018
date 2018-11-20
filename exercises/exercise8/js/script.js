/*****************

Exercise 8
David Fong

For this exercise, I'll start thinking about shooting fruits
at something

******************/

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


// variable for the state of the game
var state = "start";

// Preload the the images of the fruits

function preload() {

appleImage = loadImage("assets/images/Apple.png");
orangeImage = loadImage("assets/images/Orange.png");
kiwiImage = loadImage("assets/images/kiwi.png");
bananaImage = loadImage("assets/images/banana.png");
strawberryImage = loadImage("assets/images/strawberry.png");

}

//Setup
function setup(){
createCanvas(640, 480);

}



// draw function
