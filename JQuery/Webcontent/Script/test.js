$(document).ready(function()
{
	var array=[{name:"Home"},{name:"About"},{name:"Contact"},{name:"donate"}];
	var mynav=$(".bar");
	$.each(array,function(index,value){
		mynav.append('<li>'+value.name+'</li>');
	});

	
});
