function age() 
{
	var age=prompt("Please enter your age");
	age=parseInt(age);
	if(age==14)
	{
		alert('Coupon 1');
	}
	else
		if(age==21)
		{
			alert('Coupon 2');
		}
		else
			if(age==30)
			{
				alert('Coupon 3');
			}
			else
				if(age==50)
				{
					alert('Coupon 4');
				}else
				alert('No Coupon');
}