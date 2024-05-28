function setup() {
  createCanvas(400, 400);
  background("#F9FAF1");
  
}

function draw() {

}

function mouseDragged() {
  stroke("#00BCD4");
  strokeWeight(3);
  line(pmouseX, pmouseY, mouseX, mouseY);
  
}
