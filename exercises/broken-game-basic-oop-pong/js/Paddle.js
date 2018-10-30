// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

////////////////// FIX

//NOTE forgot to add the slashed to make comments or descriptions
//Paddle constructor

//Sets the properties with the provided arguments or defaults
////////////////// FIX
// typo with Pladdle, supposed to write Paddle
function Paddle(x,y,w,h,speed,downKey,upKey) {
  this.x = x;
  this.y = y;
////////////////// FIX
// typo with xv and yv, we are supposed to write vx and vy respectively
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  ///////////////// FIX
  // typo with speeed, we are supposed to write speed
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately

///////////////////////// FIX
//typo with proto, we are supposed to write prototype
Paddle.prototype.handleInput = function() {

//////////////////////////////// FIX
// forgot to add the word "this." to upkey
// and
// keyDown is the wrong code, keyIsDown is the right code
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
//////////////////////////////// FIX
// forgot to add the word "this." to downkey
// and
// keyDown is the wrong code, keyIsDown is the right code
  else if (keyIsDown(this.downKey)) {
///////////////////////////////// FIX
// this function needs to go down so, I took off the
// negative sign from this.speed 
    this.vy = this.speed;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;

  ////////////////////// FIX
  // typo with constraint, we are supposed to write constrain in the code
  // and
  // typo with hight, we are supposed to write height
  this.y = constrain(this.y,0,height-this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen

////////////////////////////// FIX
// typo with disploy, we are supposed to write display
// and
// there is an extra parenthese in function, I erased it
// and
// wrong code displaying rectangle, we supposed to use rect

Paddle.prototype.display = function() {
  rect(this.x,this.y,this.w,this.h);
}
