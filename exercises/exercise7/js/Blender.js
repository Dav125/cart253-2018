/*****************

Blender
By David Fong

Player's avatar will be a

******************/

//Setting the blender parameters
function Blender(x,y,size,speed,leftKey,rightKey){
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.size = size;
  this.speed = speed;
  this.leftKey = leftKey;
  this.rightKey = rightKey;

}

// Using the handleInput
//
// Check to see if left or right keys are and update the velocity
Blender.prototype.handleInput = function() {
  if(keyIsDown(this.leftKey)){
    this.vx = -this.speed;
  }
else if(keyIsDown(this.rightKey)){
  this.vx = this.speed;
}
else {
  this.vx = 0;
  }
}
// using the update function
//
//Constrain the blender to no move off the gameScreen
Blender.prototype.update = function(){
  this.x += this.vx;
  this.x = constrain(this.x,0, width);

  }

// Displaying the Blender
Blender.prototype.display = function(){
  imageMode(CENTER);
  image(blenderImage, this.x, this.y, this.size, this.size);
  }
