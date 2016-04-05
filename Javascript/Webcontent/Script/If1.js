function age() 
{
	var age=prompt("Please enter your age");
	age=parseInt(age);
	if(age<=14)
	{
		alert('Not Allowed');
	}
	else
		if(age>14 && age<65 && age!=50)
		{
			alert('Regular price');
		}
		else
			if(age===50)
			{
				alert('Special discount');
			}
}