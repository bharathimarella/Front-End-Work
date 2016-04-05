function num()
{
	var n=prompt('Enter any number greater that 10');
	n=parseInt(n);
	var i;
	if(n%2==0 && n>10)
	{
		console.log('Even');
		
		for(i=n-1;i>=n-10;i--)
		{
			if(i%2==0)
			{
				console.log(i);
			}
		}
		
	}
	else
		if(n%2!==0 && n>10)
		{
		console.log("Odd");
		for(i=(n-1);i>=(n-10);i--)
		{
			if(i%2!==0)
			{
				console.log(i);
			}
		}
	}
	else
		alert('invalid input');
	
	
}