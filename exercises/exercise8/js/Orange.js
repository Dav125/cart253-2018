/*****************

Orange Fruit
By David Fong

Fruit to used to make a fruit smoothie or
dropped to the floor

******************/

// setup()
//
// Description of setup

function Orange(x, y, vy, size, angle) {

  this.x = x;
  this.y = y;
  this.vy = vy;
  this.size = size;
  this.angle = angle;

}

// update the postion of the fruit
Orange.prototype.update = function() {
  // update the postion when it falls
  this.y = this.y - this.vy
  this.angle += 0.2;



}

// reset the postion of the x axis when it fall
Orange.prototype.isOffScreen = function() {
  // the fruit reset its postion appearing on the
  // top

  if (this.y > height) {
    this.y = height - 600;
    this.x = random(0, width);
  }
}

//display function
//
//Draw the Orange on the screen
Orange.prototype.display = function() {
  imageMode(CENTER);
  image(orangeImage, this.x, this.y, this.size, this.size);
}
