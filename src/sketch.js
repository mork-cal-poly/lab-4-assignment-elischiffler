let x = 0;
let y = 0;
let r = 0;
let s = 0;
function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(138, 196, 235);
  drawBackground();
  if (x <= 115) {
    x++;
  }
  drawMoose(x);
  drawHead();
}

function drawMoose(x) {
  push();

  translate(x, 400);
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

function drawHead() {
  push();
  fill(204, 122, 122); //Skin Color
  translate(310, 310);
  noStroke();

  //-----------Ears----------
  ellipse(60, 0, 20, 40);
  ellipse(-60, 0, 20, 40);

  //-----------Head----------
  ellipse(0, 0, 120, 160);

  //-----------Hair----------
  //Hair by ear
  push();
  fill(55, 29, 16);
  triangle(35, -35, 55, -35, 59, -10);
  triangle(-55, -35, -35, -35, -59, -10);
  pop();
  //Top part of hair
  push();
  stroke(55, 29, 16);
  strokeWeight(20);
  arc(0, -35, 90, 80, PI, 0);
  pop();

  //----------Lips---------
  push();
  fill(150, 0, 0);
  ellipse(0, 45, 50, 13);
  ellipse(0, 50, 50, 10);
  triangle(-22, 42, -22, 52, -30, 47.5);
  triangle(22, 42, 22, 52, 30, 47.5);
  stroke(0, 40);
  strokeWeight(1.5);
  line(-28, 47.5, 28, 47.5);
  pop();

  //---------------Nose--------
  push();
  stroke(0);
  strokeWeight(1.5);
  //Middle of nose
  arc(0, 27, 17, 10, 0, PI);
  //Left of Nose
  arc(-10, 25, 8, 10, PI / 2, (3 * PI) / 2);
  //Right of Nose
  arc(10, 25, 8, 10, -PI / 2, PI / 2);
  noFill();
  //Right Nose Bridge
  beginShape();
  curveVertex(7, 11);
  curveVertex(7, 11);
  curveVertex(7.5, 5);
  curveVertex(10, -1);
  curveVertex(10, -1);
  endShape();
  //Left Nose Bridge
  beginShape();
  curveVertex(-7, 11);
  curveVertex(-7, 11);
  curveVertex(-7.5, 5);
  curveVertex(-10, -1);
  curveVertex(-10, -1);
  endShape();
  pop();

  //-------------Eyes---------
  push();
  fill(250);
  //Right Eye
  ellipse(25, -10, 25, 12);
  //Left Eye
  ellipse(-25, -10, 25, 12);
  //Pupils
  push();
  fill(0);
  stroke(55, 29, 16, 200);
  strokeWeight(6);
  ellipse(25, -10, 8, 8);
  ellipse(-25, -10, 8, 8);
  pop();
  pop();

  //---------Eyebrows--------
  push();
  stroke(55, 29, 16);
  strokeWeight(4);
  //Right Eyebrow
  beginShape();
  curveVertex(11, -16);
  curveVertex(11, -16);
  curveVertex(26, -21);
  curveVertex(37, -19);
  curveVertex(37, -19);
  endShape();
  //Left Eyebrow
  beginShape();
  curveVertex(-11, -16);
  curveVertex(-11, -16);
  curveVertex(-26, -21);
  curveVertex(-37, -19);
  curveVertex(-37, -19);
  endShape();
  pop();
  pop();
}

function drawBackground() {
  push();
  fill(55, 29, 16); //Brown

  //Bottom Rectangle
  rect(0, (height * 2) / 3, width, height / 3);

  //-------------Clouds---------------
  push();
  drawCloud(0, 0);
  drawCloud(200, 30);
  drawCloud(-260, 90);
  drawCloud(360, -175);
  drawCloud(-40, 190);
  pop();

  //---------- Lines on Bottom ----------
  push();
  stroke(0);
  line(-30, height, 30, (height * 2) / 3);
  line(0, height, 55, (height * 2) / 3);
  line(30, height, 80, (height * 2) / 3);
  line(62.5, height, 105, (height * 2) / 3);
  line(95, height, 130, (height * 2) / 3);
  line(127.5, height, 155, (height * 2) / 3);
  line(160, height, 180, (height * 2) / 3);
  line(195, height, 205, (height * 2) / 3);
  line(230, height, 230, (height * 2) / 3);
  line(262.5, height, 255, (height * 2) / 3);
  line(295, height, 280, (height * 2) / 3);
  line(330, height, 300, (height * 2) / 3);
  line(367.5, height, 320, (height * 2) / 3);
  line(400, height, 345, (height * 2) / 3);
  line(430, height, 370, (height * 2) / 3);
  pop();
  pop();
}

function drawCloud(x, y) {
  translate(x, y);
  noStroke();
  fill(255);
  ellipse(77, 77, 80, 20);
  ellipse(64, 70, 28, 28);
  ellipse(85, 65, 40, 40);
}
