function letter()
{
	var s="Pneumonoultramicroscopicsilicovolcanoconiosis";
	var l=s.length;
	var c=0;
	for(var i=0;i<l;i++)
	{
		if(s[i]==="o")
		{
			c=c+1;
		}
		
	}
	alert('No.of times Letter o appears in the given String ='+c);
}
