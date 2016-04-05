$(document).ready(function()
{
	$.ajax(
	{
		url:"Data/raildata.json",
		type:"GET",
		dataType:"json",
		success:function(response){
			$.each(response.rail,function(index,value){
				var slist='';
				var list = "<li class='parent'><input type='checkbox' id='r"+index+"' />"+
	 						value.name+"<ul><li class='sub"+index+" sublist'></li></ul></li>";
	 				$("#mainlist").append(list);
	 				//console.log(list);
	 				$.each(value.stations,function(i,v){
	 					slist+="<input type='checkbox' id='st"+i+"' class='subcheck"+index+"'/>"+
	 							"<li class='child'>"+v.name+"</li>";
	 					
					});
					$(".sub"+index).append(slist);
	 					
			});
			$(".parent>input").click(function(){
				var idval=$(this).attr('id').slice(-1);
				//console.log(idval);
				var sub='.sub'+idval;
				//console.log(sub);
				var that=this;
				response.rail[idval].selected=this.checked;

				//$("#r"+idval).prop("checked",true);
				//var r= response.rail[idval].selected;
				//console.log(r);
				
				$(sub+">input").each(function(x,data){
					response.rail[idval].stations[x].selected=that.checked;

					$(data).prop("checked",that.checked);
					//$(data).prop("checked",true);
					//console.log(response.rail);
				});
			});
			$(".sublist>input").click(function(){
				var clsval=$(this).attr('class').slice(-1);
				var cls=$(this).attr('class');
				var x=$(this).attr('id').slice(-1);
				//console.log(clsval);
				//console.log(cls);
				//console.log(x);
				response.rail[clsval].stations[x].selected=this.checked;
				
				if($('.'+cls).length == $('.'+cls+":checked").length)
	 		    {


	 				$("#r"+clsval).attr("checked", "checked");
	 				response.rail[clsval].selected=this.checked;
	 				

        		} else {
            			$("#r"+clsval).removeAttr("checked");
            			response.rail[clsval].selected=this.unchecked;
        				}
			});
			$("#sbmt").click(function(){
				//console.log(response.rail);
				
				$.each(response.rail,function(index,value){
					if(value.selected==true)
					{
						$("#result").append(value.name+"</br>");
						
					}

					$.each(value.stations,function(i,data){
	 					
	 					if(data.selected==true)
	 					{
	 						$("#result").append(data.name+"</br>");
	 						
	 					}
 					});

				});
				
			});
		},
		error:function(){
				$("#result").text("error,please try again");
			},
	});
	
	
	

	
});
