//create a car class
class Car {
  //the constructor
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.acceleration = 3;
    this.maxSpeed = 8;
    this.friction = 0.05;
    this.angle = 0;

    //bring in sensor from sensors file
    this.sensor=new Sensor(this)

    //define the controls
    this.controls = new Controls();
  }

  //define the update function
  update(roadBoarder) {
    //update the speed
    this.#move();

    //update the sensor
    this.sensor.update(roadBoarder);
  }

  //define the move function
  #move() {
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }
    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      if (this.controls.left) {
        this.angle += 0.08 * flip;
      }
      if (this.controls.right) {
        this.angle -= 0.08 * flip;
      }
    }

    //rotate the car and move it coresponding to the speed and angle
    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }

  //define the draw function
  draw(ctx) {
    ctx.save();
    //the fiil color
    ctx.fillStyle = "#037fff";
    // the translate function
    ctx.translate(this.x, this.y);

    //the rotate
    ctx.rotate(-this.angle); //-this.angle because the car is facing the opposite direction

    //the begin path
    ctx.beginPath();
    //the arc
    ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.fill();

    //the end restore
    ctx.restore(); //restore the canvas

    this.sensor.draw(ctx)
  }
}
