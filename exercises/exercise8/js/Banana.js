/*****************

Banana Fruit
By David Fong

Fruit to used to make a fruit smoothie or
dropped to the floor

******************/

// function of the banana
function Banana(x,y,vy,size,angle) {

  this.x = x;
  this.y = y;
  this.vy = vy;
  this.size = size;
  this.angle = angle;

}

// update the postion of the fruit
Banana.prototype.update = function () {
// update the postion when it falls
this.y = this.y - this.vy
this.angle += 0.2;



}

// reset the postion of the x axis when it fall
Banana.prototype.isOffScreen = function () {
// the fruit reset its postion appearing on the
// top

if (this.y > height){
this.y = height - 600;
this.x = random(0,width);
}
}

//display function
//
//Draw the banana on the screen
Banana.prototype.display = function() {
imageMode(CENTER);
image (bananaImage, this.x, this.y, this.size, this.size);
}
