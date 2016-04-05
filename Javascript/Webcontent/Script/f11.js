function num()
{
	var n=prompt('Enter any number');
		n=parseInt(n);
	if(n<50 || n>200)
	{
		alert('the number is a valid number');
	}
	else
		if(n>=50 && n<=200)
		{
			alert('this is a good number');
		}
		else
			alert('It is an Invalid number');
}
				