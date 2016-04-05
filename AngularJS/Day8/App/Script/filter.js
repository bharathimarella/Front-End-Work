myApp.filter("gender",function(){
				return function(gender){
					switch(gender){
						case "m":
						return "Male";
						case "f":
						return "Female";
					}
				}
			})
myApp.filter("status",function(){

	
				return function(salary){

					if(salary>=100000 && salary<500000)
					{	
						return"GoodPay";
						
					}else
					if(salary >=500000 && salary<1000000)
					{	
						return"Rich";
					}else
					if(salary >=1000000 && salary<1000000000)
					{
						return"millionaire";
					}else
					if(salary >=1000000000)
					{
						return"billionaire";
					}else
					
					return "AveragePay";
					
				}
			})
