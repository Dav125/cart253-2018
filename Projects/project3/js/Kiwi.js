/*****************

Kiwi Fruit
By David Fong

Fruit to used to make a fruit smoothie or
dropped to the floor

******************/

// setup()
//
// Description of setup
// function of the Kiwi
function Kiwi(x, y, vy, size, angle) {

  this.x = x;
  this.y = y;
  this.vy = vy;
  this.size = size;
  this.angle = angle;

}

// update the postion of the fruit
Kiwi.prototype.update = function() {
  // update the postion when it falls
  this.y = this.y - this.vy;
  this.angle += 0.2;


}

// reset the postion when the cannon fire the fruit
Kiwi.prototype.isOffScreen = function() {
  if (this.y > height) {
    this.y = height - 600;
    this.x = random(0, width);
  }
}

//display function
//
//Draw the Kiwi on the screen
Kiwi.prototype.display = function() {
  imageMode(CENTER);
  push();
  translate(this.x, this.y);
  rotate(this.angle);
  image(kiwiImage, 0, 0, this.size, this.size);
  pop();
}

//handle collision of the target
//when the targets get hit by the fruit
//the target moves to a different position
Kiwi.prototype.handleCollision = function(target) {
  if (this.x + this.size > target.x && this.x < target.x + target.size) {

    if (this.y + this.size > target.y && this.y < target.y + target.size) {
      // The target returns to its original postion
      target.y = height;

      // when the fruit hits, it rebounds
      this.y -= this.vy;
      this.vy = -this.vy;

      // The sounds of the impact
      impact.volume = 0.4;
      impact.currentTime = 0;
      impact.play();

    }
  }
}
