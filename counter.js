function Counter() {
	this.points = 0;
	this.show = function() {
		textSize(32);
		fill(255);
		text(this.points, (width/2)-16, 200);
	}
	this.update = function() {
		this.points += 1;
		this.show();
	}
}