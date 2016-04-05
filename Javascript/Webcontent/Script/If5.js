function grade() 
{
	var g=prompt("Please enter your grade");
	if(g==='A+')
	{
		alert('Excellent');
	}
	else
		if(g==='A' && g==='A-')
		{
			alert('Good job');
		}
		else
			if(g==='B+')
			{
				alert('Above Average');
			}
			else
				if (g==='B' && g==='B-') 
				{
					alert('aerage');
				}
				else
					if (g==='C' && g==='C-' && g==='D+' && g==='D' && g==='D-')
					 {
					 	alert('poor');
					 }
					 else
					alert('Invalid input please enter grades betwee A+ to D- .Case sensitive');
			
		
}