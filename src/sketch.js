function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawMoose();
}

function drawMoose() {
  push();

  translate(135, 400);
  scale(0.7);

  noStroke();
  fill(250, 142, 95); //brown

  //neck
  quad(50, -210, 80, -260, 130, -260, 95, -200);

  //------------- horn -------------
  //base of horn
  push();
  stroke(227, 143, 75);
  strokeWeight(13);
  line(0, -280, 130, -280);
  pop();
  //spikes on horn
  push();
  fill(227, 143, 75);
  triangle(0, -280, 10, -284, -5, -310);
  triangle(-24, -293, 0, -285, 0, -275);
  triangle(25, -280, 40, -284, 15, -320);
  triangle(50, -280, 65, -284, 45, -320);
  triangle(70, -280, 85, -284, 80, -320);
  triangle(95, -280, 110, -284, 115, -320);
  triangle(120, -280, 130, -284, 135, -310);
  triangle(120, -270, 120, -285, 150, -293);
  pop();

  //head
  rect(75, -275, 60, 35, 20);

  //front left leg
  quad(60, -200, 85, -200, 100, -110, 90, -110);

  //front right leg
  quad(40, -200, 60, -200, 45, -110, 35, -110);

  //back right leg
  quad(-50, -200, -20, -200, -80, -140, -95, -140);
  quad(-95, -140, -80, -140, -70, -110, -80, -110);

  //back left leg
  quad(-52, -168, -20, -162, -70, -140, -80, -140);
  push();
  fill(51, 36, 31, 150); //Shade for leg
  quad(-52, -168, -20, -162, -70, -140, -80, -140);
  pop();
  quad(-95, -140, -80, -140, -90, -110, -100, -110);

  //eye
  push();
  stroke(51, 36, 31, 200);
  strokeWeight(3);
  arc(98, -265, 12, 5, PI, (5 * PI) / 3);
  noStroke();
  fill(51, 36, 31, 200);
  ellipse(99, -260, 8, 8);
  pop();

  //--------- Mouth ----------------
  //lower lip
  rect(120, -255, 20, 10, 4);
  //upper lip
  push();
  stroke(250, 142, 95);
  strokeWeight(10);
  line(115, -250, 138, -263);
  pop();

  //body
  ellipse(0, -200, 200, 80);

  //ear
  push();
  stroke(250, 142, 95);
  strokeWeight(3);
  fill(253, 183, 83);
  triangle(80, -260, 90, -270, 60, -280);
  pop();

  pop();
}
