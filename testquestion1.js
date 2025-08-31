function setup(){
    createCanvas(600, 400);
    background(0);
}

function draw() {
    fill(0, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(10);
    triangle(300, 150, 250, 250, 350, 250);
    circle(150, 200, 100)
    rect(400, 150, 100, 100);
}
