function Bird() {
	this.y = height/2;
	this.x = 65;

	this.gravity = .5;
	this.velocity = 0;
	this.lift = -15;

	this.show = function() {
		fill("rgb(255, 235, 59)");
		noStroke();
		ellipse(this.x, this.y, 32, 32);
	}

	this.up = function() {
		this.velocity += this.lift;
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if(this.y > height-16) {
			this.y = height-16;
			this.velocity = 0;
		}
		if(this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}
	}
}