var canvas=document.querySelector('canvas');

//set canvas width and height to fit window
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//getting drawing context in c. C holds tons of methods to draw 2 d elements within canvas.
var c=canvas.getContext('2d');







//##################################
//animate
//creating loop
var x=50;
var y=50;
var edge=window.innerWidth-50;
var i=1;
function animate()
{
	if(y==window.innerHeight-50){
		alert("done");
	}
	else
	{
		requestAnimationFrame(animate);
		c.beginPath();
		c.arc(x,y,30,0,Math.PI*2,false);
		c.strokeStyle="green";
		c.stroke();

		if(i%2==0)
			x-=3;
		else{
			x+=3;
		}

		if(x>=edge || x<=50)
		{
			y=y+50;
			i++;
		}

	}	
}

animate();
