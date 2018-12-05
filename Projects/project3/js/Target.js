/*****************

Target
By David Fong

A target being hit by the fruits

******************/

//Setting the Cannon parameters
function Target(x, y, vy,size) {
  this.x = x;
  this.y = y;
  this.vy = vy;
  this.size = size;
}

// the target will fall to the offscreen
Target.prototype.update = function () {
this.y = this.y + this.vy;
}

// Displaying the target
Target.prototype.display = function() {
  imageMode(CENTER);
  image(targetImage, this.x, this.y, this.size, this.size);
}

// resets the positon of the target when it
// is off the screen
Target.prototype.isOffScreen = function () {
  if (this.y > height){
    this.y = height - 600;
    this.x = random(0, width);

    // The crash sounds of the crate
    fallen.play();
  }
}
