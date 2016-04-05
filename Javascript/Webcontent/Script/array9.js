function array()
{
	var s=prompt('Enter the size of the Array');
	console.log("Size of Array is="+s);
	var m=[];
	for(var i=0;i<s;i++)
	{
		m[i]=prompt('Enter the elemnts into the index='+i+'of array');
		for(var j=i-1;j>=0;j--)
		{
			if(m[i]==m[j])
			{
				alert('match');
			}
		}
	}
	console.log("Array="+m);
	
}