
function setup() {
  createCanvas(800,500);
}

function draw() 
{
  background(30);

if (keyIsDown(DOWN_ARROW))
  {
    background('red');
  }
  
  if (keyIsDown(UP_ARROW))
  {
    background('green');
  }

  if (keyIsDown(LEFT_ARROW))
  {
    background('yellow');
  }

  if (keyIsDown(RIGHT_ARROW))
  {
    background('yellow');
  }
}




