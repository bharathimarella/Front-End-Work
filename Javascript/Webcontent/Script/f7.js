function num()
{
	var n=prompt('Enter any number from 1-5');
	if(n==1)
	{
		for(var i=1;i<=11;i++)
		{
			console.log(i);
		}
	}
	else
		if(n==2)
		{
			for(var i=2;i<=12;i++)
			{
				console.log(i);
			}
		}
		else
			if(n==3)
			{
				for(var i=3;i<=13;i++)
				{
					console.log(i);
				}
			}
			else
				if(n==4)
				{
					for(var i=4;i<=14;i++)
					{
						console.log(i);
					}
				}
				else
					if(n==5)
					{
						for(var i=5;i<=15;i++)
						{
							console.log(i);
						}
					}
					else
						alert('Invalid input');



}