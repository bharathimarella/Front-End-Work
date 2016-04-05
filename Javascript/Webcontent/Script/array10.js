function array()
{
	var s=prompt('Enter the size of the First Array');
	console.log("Size of First Array is="+s);
	var a1=[];
	var a2=[];
	for(var i=0;i<s;i++)
	{
		a1[i]=prompt('Enter the elemnts into the index='+i+'of First array');
		
	}
	console.log("First Array="+a1);
	var s2=prompt('Enter the size of the Second Array ');
	console.log("Size of Second Array is="+s2);
	for(var i=0;i<s2;i++)
	{
		a2[i]=prompt('Enter the elemnts into the index='+i+'of Second array');
		for(var j=0;j<a1.length;j++)
		{
			if(a2[i]===a1[j])
			{
				alert('there is a match ')
			}
		}
		
	}
	console.log("Array="+a2);
	
}