function num()
{
	var n=prompt('Enter any number');
	n=parseInt(n);
	var i;
	if(n%2==0)
	{
		console.log('Even');
		for(i=n+1;i<=(n+20);i++)
		{
			if(i%2==0)
			{
				console.log(i);
			}
		}
	}
	else
		if(n%2!==0)
		{
		console.log("Odd");
		for(i=n+1;i<=(n+20);i++)
		{
			if(i%2!==0)
			{
				console.log(i);
			}
		}
	}
	
}