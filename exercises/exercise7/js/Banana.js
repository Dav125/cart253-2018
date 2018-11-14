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
this.y = this.y + this.vy
translate(this.x, this.y);
rotate(this.angle);
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


// when the banana collides with the blender you
// score a point
Banana.prototype.handleCollision = function(blender){
  // Check if the fruit collides with blender
  if(this.x + this.size> blender.x && this.x < blender.x +blender.size){
  // Check if the fruits overlaps with the blenderImage
  if(this.x + this.size > blender.y && this.y < blender.y + blender.size){
    this.y = height - 600;
    this.x = random(0,width);
  }
  }

}
