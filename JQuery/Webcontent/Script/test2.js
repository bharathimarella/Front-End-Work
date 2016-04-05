$(document).ready(function(){
	var mydata=[{"name":"Mandeep","job":"Angular-Developer","working":"true"},
				{"name":"Soham","job":"UI-Developer","working":"false"},
				{"name":"deepali","job":"U-Developer","working":"true"},
				{"name":"Bharathi","job":"Developer","working":"false"}];
	var a=[];
	var b=[];

	$("#dev").click(function(){
	
		$.each(mydata,function(index,value)
		{	
			if(value.working=="true")
			{ 
				a.push(value.name+"  "+value.job)
			}

	});

	$.each(a,function(index,value)
	{
		$(".mydetails").html('<span>'+ a + '</span>');
	});
		a=[];
		b=[];
	});
	$("#non").click(function(){
		
		$.each(mydata,function(index,value)
		{
			if(value.working=="false")
			{
				b.push(value.name+"  "+value.job)
			}
	});
    $.each(b,function(index,value)
	{
		$(".mydetails").html('<span>'+ b + '</span>');
	});
		b=[];
		a=[];
	});

});