var bird, counter;
var pipes = [];

function setup() {
  createCanvas(400,600);
  newGame(first=true);
}

function newGame(first=false) {
  counter = new Counter();
  bird = new Bird();
  if(first) {
    pipes = [new Pipe()]; 
  } else {
    pipes = [];
  }
}

function draw() {
  background("rgb(124, 215, 226)");

  for(var i = pipes.length-1; i >= 0; --i) {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)) {
      newGame();
      break;
    }
    if(!pipes[i].ultrapassado && pipes[i].notTouchedBy(bird)) {
      pipes[i].ultrapassado = true;
      counter.update();
    }
    if(pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  counter.show();	
  bird.show();
  bird.update();

  if(frameCount % 120 == 0) {
  pipes.push(new Pipe());
  }	
}

function keyPressed() {
  if(key==' ') {
    bird.up();
  }
}
