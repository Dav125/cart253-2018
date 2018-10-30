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
  this.xv = 0;
  this.yv = 0;
  this.w = w;
  this.h = h;
  this.speed = speeed;
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
  if (keyDown(upKey)) {
    this.vy = -this.speed;
  }
  else if (keyDown(downKey)) {
    this.vy = -this.speed;
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
