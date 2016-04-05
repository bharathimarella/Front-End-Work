function prime()
{
	
	var c=0;
	for(var i=1;i<=100;i++)
	{
		for(var x=1;x<=i;x--)
		{
			var r=i%x;
			
			if(r==0)
			{

				c=c+1;
			}
			
		}
		if(c==2)
		{
			console.log(i);
		}
	}
}