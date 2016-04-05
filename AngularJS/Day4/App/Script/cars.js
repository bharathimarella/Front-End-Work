var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
				
			var cars=[
			{name:"Toyota",Likes:0,Dislikes:0},
			{name:"Audi",Likes:0,Dislikes:0},
			{name:"BMW",Likes:0,Dislikes:0},
			{name:"Rangrover",Likes:0,Dislikes:0}
			]
			$scope.cars=cars;
	$scope.like=function(car)
	{
		car.Likes++;
	}
	$scope.dislikes=function(car)
	{
		car.Dislikes++;
	}			
});