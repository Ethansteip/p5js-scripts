function setup() {
  let c = createCanvas(700, 1000);
  noLoop();
}

// Creates a box with 2 different coloured triangles inside
class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.myColours = ["#0d1321","#1d2d44","#3e5c76","#748cab","#f0ebd8"];
    this.randCol1=random(this.myColours.length);
    this.randCol1=floor(this.randCol1);
    this.randCol2=random(this.myColours.length);
    this.randCol2=floor(this.randCol2);
  }
  
  
  
  draw() {
    
    let randNum = random(2);
    randNum = floor(randNum);
    console.log(randNum);

    noStroke();
    square(this.x, this.y, 50);
    if (randNum === 1) {
      fill(this.myColours[this.randCol1]);
      triangle(this.x + 50, this.y, this.x, this.y, this.x, this.y + 50);
    } else {
      fill(this.myColours[this.randCol2]);
      triangle(this.x, this.y, this.x, this.y + 50, this.x + 50, this.y + 50);
    }
  }
}

function draw() {
  background(200,150,245);
  
  // distance between squares
  let space = 50;

    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 14; x++) {
        console.log("Coords: ", x * space, y * space);
        let box = new Box(x * space, y * space);
        box.draw();
    }
  }
  
  save("others.png");
}
