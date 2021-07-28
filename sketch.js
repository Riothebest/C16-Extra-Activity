var box1;
var a;

function setup() {
  createCanvas(600, 400);
  box1  = new Box();
  num1 = createInput();
  num1.position(300,350)
 
}

function draw() {
  background(220);

  box1.rectswidth(a);
  box1.display();

  a = parseInt(num1.value());

  textSize(20);
  fill("red");
  text("Enter Random Width",280,340);
  

}

