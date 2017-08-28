var canvas=document.querySelector('canvas');
var width=window.innerWidth;
var height=window.innerHeight;
var maxRadius=50;
var minRadius=5;
//set canvas width and height to fit window
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var colors1=["#D95560","#ACA0B8","#F2E2CE","#765647","#8C1C1C"];
var colors=["#092163","#1F9BC5","#AF9268","#EBD9C4","#B8342A"];
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
	console.log("ss");
	width=window.innerWidth;
	height=window.innerHeight;
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	init();
});


function init()
{
	circleArr=[];
	for(var i=0;i<1800;i++)
	{
		var radius=Math.random()*3+1;
		var x=Math.random() * (width-radius*2) +radius;
		var y=Math.random() * (height-radius*2) + radius;
		var dx=(Math.random()-0.5)*10;
		var dy=(Math.random()-0.5)*10;
		var color=colors[getRandomArbitrary(0,4)]
		circleArr.push(new Circle(x,y,color,radius,dx,dy));
	}
}

//object oriented js to create multiple circles who has independet x,y and velocity
function Circle(x,y,color,radius,dx,dy)
{
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
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
		if(this.x + this.radius > width || this.x - this.radius < 0)
		{
			this.dx =- this.dx;
		}
		if(this.y + this.radius > height || this.y - this.radius < 0)
		{
			this.dy=-this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		//mouse move interaction
		if(mouse.x - this.x < 80 && mouse.x - this.x > -80
			&& mouse.y-this.y <80 && mouse.y -this.y >-80){
			if(this.radius<maxRadius) this.radius+=1;
		}
		else if(this.radius>minRadius)
		{
			this.radius -= 1;
		}
		this.draw();
	}
}







//##################################
//animate
//creating loop
function animate()
{
	c.clearRect(0,0,width,height);
	requestAnimationFrame(animate);
	for(var i=0;i<1800;i++)
	{
		circleArr[i].update();
	}
}
init();
animate();
