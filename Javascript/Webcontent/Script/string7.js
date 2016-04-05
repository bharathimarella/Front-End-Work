function strbreak()
{
	var s='I like this product; I hate this product; This product is worth buying; I don’t agree with the above user';
	var l=s.length;
	for(var i=0;i<l;i++)
	{
		if(s[i]==";")
		{
			document.write('<br>');
		}
		else
			document.write(s[i]);
	}
}