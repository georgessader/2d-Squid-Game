
var up=85;
var lr=10;
var redd=true;
var games=false;
var speed=0.1;
document.onkeydown = checkKey;

function checkKey(e) {
	var playr=document.getElementById('plyr');
	playr.style.top=up+"%";
	playr.style.left=lr+"%";
    e = e || window.event;
    if (e.keyCode == '38')// up arrow
    {
    	if(redd && playr.style.backgroundColor!="red")
    	{
    		var audio = new Audio("shot.mp3");
			audio.play();
			playr.style.backgroundColor="red";
    	}
    	if(playr.style.backgroundColor!="red")
    	{
			playr.style.transform="rotate(180deg)";
    		up-=speed;
    	}
    }
    else if (e.keyCode == '40')// down arrow
    {
    	if(redd && playr.style.backgroundColor!="red")
    	{
    		var audio = new Audio("shot.mp3");
			audio.play();
			playr.style.backgroundColor="red";
    	}
    	if(playr.style.backgroundColor!="red")
    	{
			playr.style.transform="rotate(0deg)";
        	up+=speed;
    	}
    }
    else if (e.keyCode == '37')// left arrow
    {
    	if(redd && playr.style.backgroundColor!="red")
    	{
    		var audio = new Audio("shot.mp3");
			audio.play();
			playr.style.backgroundColor="red";
    	}
    	if(playr.style.backgroundColor!="red")
    	{
			playr.style.transform="rotate(90deg)";
       		lr-=speed;
    	}
    }
    else if (e.keyCode == '39')// right arrow
    {
    	if(redd && playr.style.backgroundColor!="red")
    	{
    		var audio = new Audio("shot.mp3");
			audio.play();
			playr.style.backgroundColor="red";
    	}
    	if(playr.style.backgroundColor!="red")
    	{
			playr.style.transform="rotate(270deg)";
      		lr+=speed;
    	}
    }
}
function playy()
{
	setInterval(function(){
		redd=false;
		document.getElementById('sqdoll').style.animation="cflipp 1.5s forwards";
		games=true;
		var audio = new Audio("sgdoll.mp3");
		audio.play();
		setTimeout(function(){
			document.getElementById('sqdoll').style.animation="flipp 1.5s forwards";
		},7000);
		setTimeout(function(){
			redd=true;
		},8500);
	},11000);
}

var randa=[];
var stints;
automove();
function automove()
{
	var nmplyrs=15;
	var spd=[0.1,0.002,0.003,0.4,0.9,0,0.05];
	for(var i=2;i<nmplyrs;i++)
	{
		document.getElementById('mainn').innerHTML+="<div class='plyrs'><p>"+i+"</p><img src='plyr.png'></div>";
	}
	var playrs=document.getElementsByClassName('plyrs');
	for(var i=0;i<playrs.length;i++)
	{
		playrs[i].style.left=(Math.random()*90)+"%";
	}

	var upcpu1=85,upcpu2=85,upcpu3=85,upcpu4=85;
	setInterval(function(){
	if(games)
	{
		if(!redd)
		{
			clearInterval(stints);
			for(var i=0;i<parseInt(playrs.length/4);i++)
			{
				if(playrs[i].style.backgroundColor!="red")
					playrs[i].style.top=upcpu1+"%";
			}
			for(var i=parseInt(playrs.length/4);i<parseInt(playrs.length/2);i++)
			{
				if(playrs[i].style.backgroundColor!="red")
					playrs[i].style.top=upcpu2+"%";
			}
			for(var i=parseInt(playrs.length/2);i<parseInt(playrs.length/1.3);i++)
			{
				if(playrs[i].style.backgroundColor!="red")
					playrs[i].style.top=upcpu3+"%";
			}
			for(var i=parseInt(playrs.length/1.3);i<playrs.length;i++)
			{
				if(playrs[i].style.backgroundColor!="red")
					playrs[i].style.top=upcpu4+"%";
			}
			upcpu1-=spd[Math.floor(Math.random()*7)];
			upcpu2-=spd[Math.floor(Math.random()*7)];
			upcpu3-=spd[Math.floor(Math.random()*7)];
			upcpu4-=spd[Math.floor(Math.random()*7)];
		}
		else{
			var tmm=parseInt(Math.random()*1000)-1;
			
				setTimeout(function()
				{
					var ra=parseInt(Math.random()*nmplyrs)-1;
					if(playrs[ra].style.backgroundColor!="red")
					{
			    		var audio = new Audio("shot.mp3");
						audio.play();
						playrs[ra].style.backgroundColor="red";
					}
				},tmm);
			
			
		}
	}				
	},100);
}