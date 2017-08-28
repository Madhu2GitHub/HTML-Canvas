var canvas=document.querySelector('canvas');

//set canvas width and height to fit window
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//getting drawing context in c. C holds tons of methods to draw 2 d elements within canvas.
var c=canvas.getContext('2d');

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var width=window.innerWidth;
var height=window.innerHeight;
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
		c.stroke();

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

		this.draw();
	}
}



var colors=["red","green","black","blue"]
var circleArr=[];
for(var i=0;i<200;i++)
{
	var radius=30;
	var x=Math.random() * (width-radius*2) +radius;
	var y=Math.random() * (height-radius*2) + radius;
	var dx=(Math.random()-0.5)*10;
	var dy=(Math.random()-0.5)*10;
	var color=colors[getRandomArbitrary(0,3)]
	circleArr.push(new Circle(x,y,color,radius,dx,dy));
}


//##################################
//animate
//creating loop
function animate()
{
	c.clearRect(0,0,width,height);
	requestAnimationFrame(animate);
	for(var i=0;i<200;i++)
	{
		circleArr[i].update();
	}
}

animate();
