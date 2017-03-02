function Pipe() {
  this.top = random(height/8, 6*height/8);
  this.bottom = (height-this.top)-150;
  this.x = width;
  this.w = 40;
  this.speed = 2;
  this.ultrapassado = false;

  this.offscreen = function() {
    return (this.x < (-this.w));
  }

  this.hits = function(bird) {
    return ((bird.x > this.x && bird.x < this.x + this.w) && (bird.y < this.top || bird.y > height-this.bottom)) 
  }
  
  this.notTouchedBy = function(bird) {
    return (bird.x >= this.x + this.w);
  }
  
  this.show = function() {
    fill("rgb(76, 175, 80)");
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }
  
  this.update = function() {
    this.x -= this.speed;
  }	
}
