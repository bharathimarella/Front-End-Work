function array()
{
	var a=[];
	
	for(var i=1;i<=9;i++)
	{
		a[i]=prompt('enter');
		
		
	}
	alert('Array'+a);
	alert('length of the array='+a.length);
	alert('From 4th element of array'+a.slice(4,10));
	
}