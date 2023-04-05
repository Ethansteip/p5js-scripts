function setup() {
  createCanvas(700, 1000);
  noLoop();
}

// Creates a box with 2 different coloured triangles inside
class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.myColours = ["#f4f1de","#e07a5f","#3d405b","#81b29a","#f2cc8f", "#FFFFFF"];
    this.randCol1=random(this.myColours.length);
    this.randCol1=floor(this.randCol1);
    this.randCol2=random(this.myColours.length);
    this.randCol2=floor(this.randCol2);
  }
  
  
  
  draw() {
    noStroke();
    square(this.x, this.y, 50);
    fill(this.myColours[this.randCol1]);
    triangle(this.x, this.y, this.x, this.y + 50, this.x + 50, this.y + 50);
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
}