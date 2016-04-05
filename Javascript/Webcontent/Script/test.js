function obama() {
	var name=prompt('Enter your name');
	var age=prompt('Enter your age');
	age=parseInt(age);
	var g=prompt('Enter your Gender');
	var country=prompt('Enter your country name');
	if ((g==='male' && age>=19 && country==='usa') ||(g==='female' && age>=21 && country==='usa'))
	{
		alert(name+' '+'is eligible for Obamacare');
	}
	else
		if ((g==='male' && age<19 && country==='usa') ||(g==='female' && age<21 && country==='usa') ||( g==='male' && age>21 &&(country==='india' || country==='pakistan'))) 
		{
			alert(name+' '+'is not eligible for Obamacare');
		}
	else
		
			alert('invalid input');

}