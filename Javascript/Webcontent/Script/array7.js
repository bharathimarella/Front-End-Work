function array()
{
	var m=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var a=prompt('Enter any day like monday,tuesday...');
	if(a==='monday')
	{
		 m=['Tuesday','Wednesday','Thursday','Friday','Saturday'];
		console.log(m.slice(2,7));
	}
	else
		if(a==='tuesday')
		{
			 
			 console.log(m.slice(3,7));
		}
		else
			if(a==='wednesday')
			{
				
				console.log(m.slice(4,7));
			}
			else
				if(a==='thursday')
				{
					
					console.log(m.slice(5,7));
				}
				else
					if(a==='friday')
					{
						
						console.log(m.splice(6,1));
					}
					else
						if(a==='saturday')
						{
							
							console.log(m.splice(0,1));
						}
						else
							if(a==='sunday')
							{
								console.log('it is the lastday of the week');
							}
							else
								alert("Invalid input");


}