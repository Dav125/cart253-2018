// Ball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Ball constructor
//
// Sets the properties with the provided arguments
function Ball(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;
}

// update()
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.
//////////////////////////////////////////////// FIX
//NOTE faction is supposed to be function
Ball.prototype.updated = function () {
  // Update position with velocity
  this.x = this.vx;
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y,0,height-this.size);

  // Check for touching upper or lower edge and reverse velocity if so

//////////////////////////////////////////////////////// FIX
// Missing 2(=) signs
// and
// 2 extra = signs for this.y this.size and height, I erased 2 = signs.
  if (this.y === 0 || this.y + this.size = height) {
    this.vy = -this.vy;
  }
}

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Ball.prototype.isOffScreen = function () {
  // Check for going off screen and reset if so

  ///////////////// Fix
  // typo error with iff, we are supposed to write "if"
  // there was an extra + after this.x
  if (this.x + this.size < 0 && this.x > width) {
    return true;
  }
  else {
    return false;
  }
}

// display()
//
// Draw the ball as a rectangle on the screen
Ball.prototype.display = function () {

  ////////////////////// FIX
  // There was a missing comma, I added a comma(,)
  rect(this.x, this.y);
}

// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce

///////////////////////// FIX
//NOTE We are supposed to write prototype not prototyp. Its a typo
// There is one extra parenthese in paddle
Ball.prototype.handleCollision = function(paddle) {
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      // Reverse x velocity to bounce
      this.vx = this.vx;
    }
  }
}

// reset()
//
// Set position back to the middle of the screen
Ball.prototype.rest = function () {
  this.x = width/2;
  this.y = height/2;
}
