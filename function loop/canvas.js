//Bouncing ball using function loop
var canvas=document.querySelector('canvas');

//set canvas width and height to fit window
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//getting drawing context in c. C holds tons of methods to draw 2 d elements within canvas.
var c=canvas.getContext('2d');







//##################################
//animate
//creating loop


var width=window.innerWidth;
var height=window.innerHeight;
var x=Math.random()*width;
var y=Math.random()*height;
var dx=(Math.random()-0.5)*20;
var dy=(Math.random()-0.5)*20;
function animate()
{
	c.clearRect(0,0,width,height);
	requestAnimationFrame(animate);
	c.beginPath();
	c.arc(x,y,30,0,Math.PI*2,false);
	c.strokeStyle="green";
	c.stroke();
	c.fillStyle="green";
	c.fill();

	if(x+30 > width || x-30 <0)
	{
		dx=-dx;
	}
	if(y+30 > height || y-30 <0)
	{
		dy=-dy;
	}
	x+=dx;
	y+=dy;
}

animate();
