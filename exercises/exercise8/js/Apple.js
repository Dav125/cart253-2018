/*****************

Apple Fruit
By David Fong

Fruit to used to make a fruit smoothie or
dropped to the floor

******************/

// function of the apple
function Apple(x, y, vy, size, angle) {

  this.x = x;
  this.y = y;
  this.vy = vy;
  this.size = size;
  this.angle = angle;

}

// update the postion of the fruit
Apple.prototype.update = function() {
  // update the postion when it falls
  this.y = this.y - this.vy
  this.angle += 0.2;



}

// reset the postion of the x axis when it fall
Apple.prototype.isOffScreen = function() {
  // the fruit reset its postion appearing on the
  // top

  if (this.y > height) {
    this.y = height - 600;
    this.x = random(0, width);
  }
}

//display function
//
//Draw the apple on the screen
Apple.prototype.display = function() {
  imageMode(CENTER);
  image(appleImage, this.x, this.y, this.size, this.size);
}
