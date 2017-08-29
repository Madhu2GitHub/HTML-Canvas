// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
var mouse = {
	x: undefined,
	y: undefined 
};

var colors = [
	'#262555',
	'#A3C3B3',
	'#64470F',
	'#AD522C',
	'#3F2A4A'
];

var gravity=1;
var fraction=0.89;


addEventListener("resize", function() {
	canvas.width = innerWidth;	
	canvas.height = innerHeight;

	init();
});

addEventListener("click", function() {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
function Object(x, y, radius, color,dy,dx) {
	this.x = x;
	this.y = y;
	this.dy=dy;
	this.dx=dx;
	this.radius = radius;
	this.color = color;

	this.update = function() {
		if(this.y+this.radius+this.dy>canvas.height)
		{
			this.dy=-this.dy*fraction;
		}
		else
		{
			this.dy+=gravity;
		}

		if(this.x+this.radius+this.dx>canvas.width || this.x-this.radius<=0)
		{
			this.dx=-this.dx;
		}
		this.y+=this.dy;
		this.x+=this.dx

		
		this.draw();
	};

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	};
}

var balls=[];
// Implementation
function init() {
	balls=[];
	for(var i=0;i<500;i++)
	{
		var radius=randomIntFromRange(25,35);
		var x=randomIntFromRange(radius,canvas.width-radius);
		var y=randomIntFromRange(0,canvas.height-radius);
		var dy=randomIntFromRange(-2,2);
		var dx=randomIntFromRange(-2,2);
		var color=randomColor();
		balls.push(new Object(x,y,radius,color,dy,dx));
	}

}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, canvas.width, canvas.height);
	for(var i=0;i<500;i++)
	{
		balls[i].update();
	}
}

init();
animate();