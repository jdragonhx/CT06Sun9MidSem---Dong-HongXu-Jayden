function setup(){
    createCanvas(600, 600);
    background(220);
}

function draw() {
    for (let i = 0; i < 10; i++) {
        fill(i * 25, i * 25, i * 25)
        circle(50 + i * 50, i * 50 , 50);
}
    }

