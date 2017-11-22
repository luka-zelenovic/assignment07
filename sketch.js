var capture;
var mic;
function setup() {
	createCanvas(500, 500);
	mic = new p5.AudioIn();
	mic.start();
	capture = createCapture(VIDEO);
	capture.size(500, 375);
	capture.hide();
background(25);
}

function draw() {
	translate(0,62.5);
	background(25);
	var myImage = capture.loadPixels();
	var vol = mic.getLevel();
	image(myImage, 0, 0, 500, 375);
	if (vol>.0 && vol<.1) {
		filter(THRESHOLD);
		fill(random(255),random(255),random(255));
				rect(random(0,375),random(0,375),25,25);
	}  else if (vol>.1 && vol<.3) {
		filter(INVERT);
	fill(random(255),random(255),random(255));
				ellipse(random(0,375),random(0,375),50);

	}  else if (vol>.3 && vol<.5) {
		filter(POSTERIZE,3);
		strokeWeight(5);
				stroke(random(255),random(255),random(255));
				line(random(0,375),random(0,375),random(0,375),random(0,375));

	}  
		console.log(vol);
	var lvl = map(vol,0,.5,1,100);
	var num = lvl* 200 % 100;
	fill(255);
	textSize(30);
	text('MAKE SOME NOISE ', 100,410);
}