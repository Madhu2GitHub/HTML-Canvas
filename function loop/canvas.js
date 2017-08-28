var canvas=document.querySelector('canvas');

//set canvas width and height to fit window
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//getting drawing context in c. C holds tons of methods to draw 2 d elements within canvas.
var c=canvas.getContext('2d');







//##################################
//animate
//creating loop
var x=30;
var y=50;
var edge=window.innerWidth;
var i=1;
var dx=20;
function animate()
{
	//to make circle move instead of drawing multiple circle on canvas use clearRect
	//c.clearRect(0,0,window.innerWidth,window.innerHeight);
	if(y>=window.innerHeight){
		alert("done");
	}
	else
	{
		requestAnimationFrame(animate);
		c.beginPath();
		c.arc(x,y,30,0,Math.PI*2,false);
		c.strokeStyle="green";
		c.stroke();

		if(x+30 > edge || x-30 <0)
		{
			dx=-dx;
			y+=50;
		}
		x+=dx;

	}		
}

animate();
