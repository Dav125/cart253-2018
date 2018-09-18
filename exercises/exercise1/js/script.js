// Exercise 1 - Moving pictures
// Pippin Barr
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.


// The image of a clown face
var clownImage;

// The image of Homer face
var homerImage;

// The current position of the clown face
var clownImageX;
var clownImageY;

// The current position of the Homer Simpson
var homerImageX;
var homerImageY;

// The transparent image of "felt" that wipes down the canvas
var feltTextureImage;
// The current position of the transparent image of "felt"
var feltTextureImageX;
var feltTextureImageY;

//added a triangle that moves from left to right
var beerImage;

// The current position of beer
var beerImageX;
var beerImageY;


// preload()
//
// Load the two images we're using before the program starts

function preload() {
  clownImage = loadImage("assets/images/clown.png");
  feltTextureImage = loadImage("assets/images/black-felt-texture.png");

  homerImage = loadImage("assets/images/Homer.png");
  beerImage = loadImage("assets/images/Duff.png");

}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  //Added Homer at the start image
  homerImageX = width/2;
  homerImageY = height/2;

  // Start the clown image at the centre of the canvas
  clownImageX = width/2;
  clownImageY = height/2;

 // Start with the beer image
  beerImageX = 0 - beerImage. width/2
  beerImageY = height/2;

  // Start the felt image perfectly off screen above the canvas
  feltTextureImageX = width/2;
  feltTextureImageY = 0 - feltTextureImage.height/2;



  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {

  // Move the felt image down by increasing its y position
  feltTextureImageY += 1;

  // Move the Beer Image from left to right (x positio)
  beerImageX += 1;

  //Display the beer Image
  image(beerImage,beerImageX,beerImageY);

  // Display the felt image
  image(feltTextureImage,feltTextureImageX,feltTextureImageY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;

  // Calculate the distance in X and in Y for homerImage
  var xDistance = mouseX - homerImageX;
  var yDistance = mouseY - homerImageY;


  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;

  //Lets see what Homer thinks
  homerImageX = homerImageX + xDistance/5;
  homerImageY = homerImageY + yDistance/5;

  // Display Homer
  image(homerImage,homerImageX,homerImageY);

  // Display the clown Image
  image(clownImage,clownImageX,clownImageY);


}
