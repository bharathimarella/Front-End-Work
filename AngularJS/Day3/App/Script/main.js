var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
				var show={
					name:"twitter",
					poster:"Image/twitter.jpg"
				}
				$scope.show=show;
				var employees=[
					{Firstname:"bharathi",Lastname:"marella",Gender:"Female",Pay:"$10000"},
					{Firstname:"A",Lastname:"f",Gender:"male",Pay:"$11000"},
					{Firstname:"B",Lastname:"g",Gender:"Female",Pay:"$90000"},
					{Firstname:"C",Lastname:"h",Gender:"male",Pay:"$80000"},
					{Firstname:"D",Lastname:"i",Gender:"Female",Pay:"$120000"},
				];
				$scope.employees=employees;
				var cars=[
				{ Brand:"Nissan",
				  models:[
				  			{name:"sentra"},
				  			{name:"altima"},
				  			{name:"maxima"}
				  		]
				},
				{ Brand:"Audi",
				  models:[
				  			{name:"A4"},
				  			{name:"Q5"},
				  			{name:"Q6"}

				  		]
				},
				{ Brand:"BMW",
				  models:[	{name:"M6"},
				  			{name:"X3"},
				  			{name:"Alpina"}
				  		]
				},
				];
				$scope.cars=cars;


				

				
});
