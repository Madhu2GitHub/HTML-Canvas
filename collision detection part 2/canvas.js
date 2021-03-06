var canvas=document.querySelector('canvas');
var width=window.innerWidth;
var height=window.innerHeight;
var maxRadius=50;
var minRadius=5;
//set canvas width and height to fit window
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var colors=["#D96A9E","#F2D49B","#D9BBA9","#592722","#D95959"];
var circleArr=[];
//getting drawing context in c. C holds tons of methods to draw 2 d elements within canvas.
var c=canvas.getContext('2d');

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var mouse={
	x:undefined,
	y:undefined
}
//add mouse move event listener 
window.addEventListener("mousemove",function(event){
	mouse.x=event.x;
	mouse.y=event.y;

});

window.addEventListener("resize",function(){
	
	width=window.innerWidth;
	height=window.innerHeight;
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	init();
});

var circle1;
var circle2;
function init()
{
	circle1=new Circle(99,canvas.height-99,"#D95959",80);
	circle2=new Circle(canvas.width-99,canvas.height-99,"#D95959",80);
}

//object oriented js to create multiple circles who has independet x,y and velocity
function Circle(x,y,color,radius)
{
	this.x=x;
	this.y=y;
	this.color=color;
	this.radius=radius;
	this.draw=function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		c.strokeStyle=this.color;
		c.stroke();0
		c.fillStyle=this.color;
		c.fill();

	}
	this.update=function(){
		this.draw();
	}
}

function getDistance(x1,y1,x2,y2)
{
	return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
}




var dx1=5;
var dx2=5;
//##################################
//animate
//creating loop
var first=true;
function animate()
{
	c.clearRect(0,0,width,height);
	requestAnimationFrame(animate);
	circle1.update();
	circle2.update();

	if(getDistance(circle1.x,circle1.y,circle2.x,circle2.y)<=circle2.radius+circle1.radius)
	{
		dx1=-dx1;
		console.log(dx1);
	}
	if(circle1.x<99 || circle2.x > canvas.width-99)
	{
		dx1=-dx1;
	}
	circle1.x+=dx1;
	circle2.x-=dx1;

	
}
init();
animate();
