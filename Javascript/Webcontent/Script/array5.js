function array()
{
	var a=['You have to dream before your dreams can come true.','The bird is powered by its own life and by its motivation.',
				'If you want to shine like a sun, first burn like a sun.','Great dreams of great dreamers are always transcended',
				'Excellence is a continuous process and not an accident','You see, God helps only people who work hard. That principle is very clear',
				'We should not give up and we should not allow the problem to defeat us','No sanction can stand against ignited minds',
				'There has to be a global mission of human progress','Do we not realize that self respect comes with self reliance'];

	var m=['jan','feb','march','april','may','june','july','august','sep','nov','dec'];
	var array=a.concat(m);
	document.write("length of array 1="+a.length+"<br>");
	document.write("length of array 2="+m.length+"<br>");
	document.write("length of new array after concat()="+array.length+"<br>");
	for(var i=0;i<array.length;i++)
	{
		document.write(array[i]);
		document.write("<br>");
	}
	

}