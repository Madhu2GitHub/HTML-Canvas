var canvas=document.querySelector('canvas');

//set canvas width and height to fit window
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//getting drawing context in c. C holds tons of methods to draw 2 d elements within canvas.
var c=canvas.getContext('2d');
//##################################
//REctangle
//change color of rect
c.fillStyle='rgba(255,0,0,0.5)';
//.fillRect(x,y,width,height);
c.fillRect(100,100,50,50);
c.fillStyle='rgba(0,255,0,0.5)';
c.fillRect(200,200,50,50);
c.fillStyle='rgba(0,0,255,0.5)';
c.fillRect(300,100,50,50);

//##################################
//Line
c.beginPath();
//c.moveTo(x,y) untill you call stroke line wont be visible
c.moveTo(150,120) //from
c.lineTo(300,120); //to

c.moveTo(225,200)
c.lineTo(300,120);

c.moveTo(225,200)
c.lineTo(150,120);
//line style
c.strokeStyle="brown";

c.stroke();


//##################################
//ARC : arc(x,y,radius,startAngle[takes value in radiance, what angle to draw arc],endAngle[how long it should go],drawCounterClockwise[boolean])
c.beginPath();
c.arc(300,500,30,0,Math.PI*2,false);
c.strokeStyle="green";
c.stroke();


//multiple arcs using for
for(var i=0;i<20;i++){
	c.beginPath();
	c.arc(500,10*i+100,30,0,Math.PI*2,false);
	c.strokeStyle="green";
	c.stroke();
}

for(var i=0;i<20;i++){
	c.beginPath();
	c.arc(700,10*i+100,30,0,Math.PI*2,false);
	c.strokeStyle="green";
	c.stroke();
}

for(var i=0;i<20;i++){
	c.beginPath();
	c.arc(10*i+500,10*i+100,30,0,Math.PI*2,false);
	c.strokeStyle="green";
	c.stroke();
}
for(var i=0;i>=-20;i--){
	c.beginPath();
	c.arc(-10*i+500,10*i+300,30,0,Math.PI*2,false);
	c.strokeStyle="green";
	c.stroke();
}

//##################################
/* arcs with random points
for(var i=0;i<5000;i++){
	c.beginPath();
	var x=Math.random()*window.innerWidth;
	var y=Math.random()*window.innerHeight;
	c.arc(x,y,30,0,Math.PI*2,false);
	c.strokeStyle="green";
	c.stroke();
}
for(var i=0;i<2500;i++){
	c.beginPath();
	var x=Math.random()*window.innerWidth;
	var y=Math.random()*window.innerHeight;
	c.arc(x,y,30,0,Math.PI*2,false);
	c.strokeStyle="blue";
	c.stroke();
}
for(var i=0;i<1000;i++){
	c.beginPath();
	var x=Math.random()*window.innerWidth;
	var y=Math.random()*window.innerHeight;
	c.arc(x,y,30,0,Math.PI*2,false);
	c.strokeStyle="red";
	c.stroke();
} */