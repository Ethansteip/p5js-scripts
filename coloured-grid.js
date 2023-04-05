function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(200,150,245);

  // distance between squares
  let space = 50;
  strokeWeight(0);
  
  // Colours
  const myColours = ["#f4f1de","#e07a5f","#3d405b","#81b29a","#f2cc8f", "#FFFFFF"];
  
  // two for loops are needed to make a grid of squares
  // the outer loop controls how many rows are made
  // the inner loop controls how many columns are made
  for (let y = 0; y < 10; y++) {

    for (let x = 0; x < 10; x++) {
      randCol=random(myColours.length);
      randCol=floor(randCol);
      fill(myColours[randCol]);
      square(x * space, y * space, 50);
      
    }
  }
}