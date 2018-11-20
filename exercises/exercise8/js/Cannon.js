/*****************

Cannon
By David Fong

Player's avatar will be a cannon and shoot fruits

******************/

//Setting the Cannon parameters
function Cannon(x, y, size, speed, leftKey, rightKey, spaceKey) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.size = size;
  this.speed = speed;
  this.leftKey = leftKey;
  this.rightKey = rightKey;
  this.spaceKey = spaceKey;
}

// Using the handleInput
//
// Check to see if left or right keys are and update the velocity
Cannon.prototype.handleInput = function() {
  if (keyIsDown(this.leftKey)) {
    this.vx = -this.speed;
  } else if (keyIsDown(this.rightKey)) {
    this.vx = this.speed;
  } else {
    this.vx = 0;
  }

  // Press spacebar to shoot random fruit
  var r = random();
  if (keyIsPressed && keyCode === 32) {
    if (r < 0.2) {
      // shoots apple
      console.log("shoot apple");
      apples.push(new Apple(this.x, this.y, 5, 50, 0.2));
    } else if (r < 0.4) {
      // shoots banana
      console.log("shoot banana");
      bananas.push(new Banana(this.x, this.y, 5, 50, 0.2));
    } else if (r < 0.6) {
      // shoots kiwi
      console.log("shoot kiwi");
      kiwis.push(new Kiwi(this.x, this.y, 5, 50, 0.2));
    } else if (r < 0.8) {
      // shoots orange
      console.log("shoot orange");
      oranges.push(new Orange(this.x, this.y, 5, 50, 0.2));
    } else if (r < 1.0) {
      // shoots strawberry
      console.log("shoot strawberry");
      strawberrys.push(new Strawberry(this.x, this.y, 5, 50, 0.2));
    }

  }
}
// using the update function
//
//Constrain the cannon to no move off the gameScreen
Cannon.prototype.update = function() {
  this.x += this.vx;
  this.x = constrain(this.x, 0, width);

}

// Displaying the Blender
Cannon.prototype.display = function() {
  imageMode(CENTER);
  image(cannonImage, this.x, this.y, this.size, this.size);
}
