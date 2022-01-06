function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(255,254,232);
  translate(300,300);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  let hr2 = hour()-5; 
  
  fill(255);
  noStroke();
  text(hr+':'+mn+':'+sc, width/2, height/2);
  
  // minute
  noStroke();
  fill(228,191,176);
  let end1 =map(mn,0,60,0,360);

  // second
  noStroke();
  fill(228,191,176);
  let end2 =map(sc,0,60,0,360);
  
  // US hr rotate
  push();
  translate(0,-100)
  rotate(end1); 
  ellipseMode(CENTER);
  
  strokeWeight(3);
  stroke(194,156,147);
  fill(228,191,176);
  let end4 =map(hr2%12,0,12,0,360);
  arc(0,0,250,250,0,end4,PIE);
  pop();
 
  // London hr rotate
  push();
  translate(0,200)
  rotate(end2); 
  ellipseMode(CENTER);
  
  strokeWeight(3);
  stroke(153,127,105);
  fill(201,176,139);
  let end3 =map(hr%12,0,12,0,360);
  arc(0,0,250,250,0,end3,PIE);
  pop();
  
  // creates vertices for brown circle
  translate(100, 200);
  strokeWeight(5);
  stroke(153,127,105);
  fill(201,176,139);
  let esum = end2 + end3;
  strokeWeight(0.3);
  point(125*cos(end2)-100, 125*sin(end2));
  point(125*cos(esum)-100, 125*sin(esum));
  
  // saves coordinates for brown vertices
  let abs_x11 = 125*cos(end2)-200;
  let abs_y11 = 125*sin(end2)-50;
  let abs_x12 = 125*cos(esum)-200;
  let abs_y12 = 125*sin(esum)-50;
  
  // creates vertices for coral circle
  translate(100, 50);
  stroke(194,156,147);
  fill(228,191,176);
  let esum2 = end1 + end4;
  strokeWeight(0.3);
  point(125*cos(end1)-200, 125*sin(end1)-350);
  point(125*cos(esum2)-200, 125*sin(esum2)-350);
  
  // saves coordinates for coral vertices
  let abs_x21 = 125*cos(end1)-200;
  let abs_y21 = 125*sin(end1)-350;
  let abs_x22 = 125*cos(esum2)-200;
  let abs_y22 = 125*sin(esum2)-350;
  
  // creates connecting line segments
  stroke(115,96,86);
  strokeWeight(2);
  line(abs_x11, abs_y11, abs_x21, abs_y21);
  line(abs_x12, abs_y12, abs_x22, abs_y22);
}