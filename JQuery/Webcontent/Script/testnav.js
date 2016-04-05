$(document).ready(function()
{
	$.ajax(
	{
		url:"Data/testdata.json",
		type:"GET",
		dataType:"json",
		success:function(response){
			
			var mynav=$(".bar");
			$.each(response.navigation,function(index,value){
			mynav.append('<li>'+value.name+'</li>');
			});
		},
		error:function(){
				$("#navbar").text("error,please try again");
			},
	});
	
	
	

	
});
