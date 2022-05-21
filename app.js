const canvas = document.getElementById("myCanvas");

//create a canvas size
canvas.width = 200;

//create a context
const ctx = canvas.getContext("2d");

//create a road object
const road = new Road(canvas.width / 2, canvas.width * 0.9);

//create a car object
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

//define the animation function
const animation = () => {
  //clear the canvas
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  //update the car
  car.update(road.borders);

  canvas.height = window.innerHeight;

  ctx.save();
  ctx.translate(0, -car.y + canvas.height * 0.8);

  //draw the road
  road.draw(ctx);

  //draw the car
  car.draw(ctx);

  ctx.restore();

  //call the animation function again
  requestAnimationFrame(animation);
};

animation();
