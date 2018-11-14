/*****************

Strawberry Fruit
By David Fong

Fruit to used to make a fruit smoothie or
dropped to the floor

******************/

// setup()
//
// Description of setup

function Strawberry(x,y,vy,size,angle) {

  this.x = x;
  this.y = y;
  this.vy = vy;
  this.size = size;
  this.angle = angle;

}

// update the postion of the fruit
Strawberry.prototype.update = function () {
// update the postion when it falls
this.y = this.y + this.vy
translate(this.x, this.y);
rotate(this.angle);
this.angle += 0.2;



}

// reset the postion of the x axis when it fall
Strawberry.prototype.isOffScreen = function () {
// the fruit reset its postion appearing on the
// top

if (this.y > height){
this.y = height - 600;
this.x = random(0,width);
}
}

//display function
//
//Draw the Strawberry on the screen
Strawberry.prototype.display = function() {
imageMode(CENTER);
image (strawberryImage, this.x, this.y, this.size, this.size);
}


// when the Strawberry collides with the blender you
// score a point
Strawberry.Prototype.handleCollision = function(blender){
  // Check if the fruit collides with blender

}
