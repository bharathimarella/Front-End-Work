$(document).ready(function(){
	$("#mybtn").click(function(){
		$.ajax({
			url:"Data/guitardata.json",
			type:"GET",
			dataType:"json",
			success:function(response){
				var x=parseJSON(response);
				$("#mydiv").text("name:"+x.allProducts.allPrices);
			},
			error:function(){
				$("#mydiv").text("error,please try again");
			},
		});

	});

});