function grade() 
{
	var g=prompt("Please enter your grade");
	switch(g)
	{
		case 'A+':alert('Excellent');
		break;
		case 'A':
		case 'A-':
		alert('Good job');
		break;
		case 'B+':
		alert('Above Average');
		break;
		case 'B':
		case 'B-':
		alert('Average');
		break;
		case 'C':
		case'C-':
		case'D+':
		case'D':
		case'D-':
		alert('poor');
		break;
		default:alert('Invalid input please enter grades betwee A+ to D- .Case sensitive');

	}
}