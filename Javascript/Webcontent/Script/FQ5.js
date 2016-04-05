function age() {
	var age=prompt("Please enter your age");
	age=parseInt(age);
	if(age<=2)
	{
		alert('No charge');
	}
	else
		if(age>2 && age<=14)
		{
			alert('10% discount');
		}
		else
			if(age>14 && age<=55)
			{
				alert('Regular price');
			}
			else
				alert('20% discount');
}
