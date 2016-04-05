function dish()
 {
	var day=prompt('Enter the day');
	switch(day)
	{
		case 'monday':alert('Mondays, We serve Pasta');
		break;
		case 'tuesday':alert('Tuesdays, We serve Pizza');
		break;
		case 'wednesday':alert('Wednesdays, We serve Biryani');
		break;
		case 'thursday':alert('Thursdays, we serve Sandwich');
		break;
		case 'friday':alert('Fridays, we serve Tacos');
		break;
		case 'saturday':alert('Saturdays,we serve hummus');
		break;
		case 'sunday':alert('Sundays,we serve buffet');
		break;
		default:alert('Invalid input');

	}
}