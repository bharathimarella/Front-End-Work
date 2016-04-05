function array()
{
	var m=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var a=prompt('Enter any day like monday,tuesday...');
	if(a==='monday')
	{
		 
		console.log(m.slice(2,6)+m.splice(0,2));
	}
	else
		if(a==='tuesday')
		{
			 
			 console.log(m.slice(3,6)+m.splice(0,3));
		}
		else
			if(a==='wednesday')
			{
				
				console.log(m.slice(4,6)+m.splice(0,4));
			}
			else
				if(a==='thursday')
				{
					
					console.log(m.splice(5,2)+m.splice(0,4));
				}
				else
					if(a==='friday')
					{
					
						console.log(m.splice(6,1)+m.slice(0,5));
					}
					else
						if(a==='saturday')
						{
						
							console.log(m);
						}
						else
							if(a==='sunday')
							{
								console.log('it is the lastday of the week');
							}
							else
								alert("Invalid input");


}