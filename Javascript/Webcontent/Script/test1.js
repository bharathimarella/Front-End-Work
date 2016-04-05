function display()
{
	var a=['one','Two','Three','Four','Five','six','Seven','Eight','Nine'];
	var i=prompt('Please Enter any input value from 121-129');
	for(var x=121;x<=129;x++)
	{
		if(i==x)
		{
			alert('One Two'+' '+a[x-121]);
		}
	}
}