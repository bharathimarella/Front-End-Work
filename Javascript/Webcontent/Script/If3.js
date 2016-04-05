function dish() 
{
	var day=prompt("Please enter the day");
	if(day==='monday')
	{
		alert('Mondays, We serve Pasta');
	}
	else
		if(day==='tuesday')
		{
			alert('Tuesdays, We serve Pizza');
		}
		else
			if(day==='friday')
			{
				alert('Fridays, we serve Tacos');
			}
			else
				if(day==='wednesday')
				{
					alert('Wednesdays, We serve Biryani');
				}
				else
					if(day==='thursday')
					{
						alert('Thursdays, we serve Sandwich');
					}
					else
						if (day==='saturday') 
						{
							alert('Saturdays,we serve hummus');
						}
						else
							if(day==='sunday')
							{
								alert('Sundays,we serve buffet')
							}
							else
								alert('Invalid input');
		
}