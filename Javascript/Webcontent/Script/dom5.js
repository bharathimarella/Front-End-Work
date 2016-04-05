function prev()
{
	var img=['./Image/car1.gif','./Image/car2.gif','./Image/car2_t.gif','./Image/car3.gif','./Image/car4.gif','./Image/car5.gif','./Image/car6.gif','./Image/car7.gif','./Image/phoneIcon.png','./Image/youtube.png'];

	var y=document.getElementById("image").src;
	var l=img.length;
	document.write(y);
	
	for(var i=0;i<l;i++)
	{
		if(y===img[i])
		{alert("yes");
			document.getElementById("image").src=img[i];
		}
	}
	

}