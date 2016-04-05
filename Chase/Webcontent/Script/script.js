$(document).ready(function()
{
	var a=['Credit cards',"Checking","Savings and CDs","Relodable card","Auto loans","Mortgage","Investing","Business banking","Commercial banking","see all"];
	var list=[];
	$.each(a,function(index,value){
		list.push("<li class='sublist hlist'>"+value+"</li>");
		
	});
	var d="<ul class='list'></ul>";
	//$.fn.slideFadeToggle  = function(speed, easing, callback) {
       // return this.animate({opacity:'toggle',height:'toggle',width:'toggle'}, speed, easing, callback);
//}; 
	//$(".list").hide();
	$(".menu").click(function(){
		 if ($('.menu').hasClass("clicked-once"))
		  {
			$('.list').hide();
			$('.menu').removeClass("clicked-once");
    	  }
    	else {
			$('.menu').addClass("clicked-once");
			$('.login').css("z-index",-2);
			//$('.login').css("position","relative");
			//$('.login').css("margin-left",726px);
			$('.main').append(d);
			$(".list").append(list);
			$('.list li').hide();
			//$('.list li').fadeIn(4000);
			$("li").each(function(i) {
				
    			//$(this).delay(100*i).slideFadeToggle(3000);
    			$(this).delay(150*i).fadeIn(500);

			});

			 }

	});

});