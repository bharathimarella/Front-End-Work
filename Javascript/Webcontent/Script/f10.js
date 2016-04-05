function num()
{
	var n=prompt('Enter any number from 1-50');
	if(n>=1 && n<=10)
	{
		alert('the number is between 1 and 10');
	}
	else
		if(n>=11 && n<=20)
		{
			alert('the number is between 11 and 20');
		}
		else
			if(n>=21 && n<=30)
			{
				alert('the number is between 21 and 30');
			}
			else
				if(n>=31 && n<=40)
				{
					alert('the number is between 31 and 40');
				}
				else
					if(n>=41 && n<=50)
					{
						alert('the number is between 41 and 50');
					}
					else
						alert('Please enter a valid number');



}