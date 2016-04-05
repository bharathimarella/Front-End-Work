function array()
{
var a=[];
	
	for(var i=1;i<=5;i++)
	{
		a[i]=prompt('enter');
		
		
	}
	console.log(a);
	console.log('length of the array='+a.length);
	a.pop();
	console.log('length of the array='+a.length);
	a.reverse();
	console.log('8th element after reverse='+a[4]);
	console.log(a);
		a.shift();
console.log('length'+a.length);
	console.log(a);	
	a.push(55);

console.log(a);	
a.unshift(9,8);
console.log(a);
a.slice(2,5);
console.log(a.slice(2,5));

}