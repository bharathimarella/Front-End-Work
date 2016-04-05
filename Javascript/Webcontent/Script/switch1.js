function age() 
{
	var age=prompt('Enter the Age')	;
	age=parseInt(age);
	switch(age)
	{
		case 14:alert('Coupon 1');
		break;
		case 21:alert('Coupon 2');
		break;
		case 30:alert('Coupon 3');
		break;
		case 50:alert('Coupon 4');
		break;
		default:alert('No Coupon');
		

	}
}