var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
				
			var lists=['Start Html & Css','Jquery','AngularJs','Extra Stuff'];
			$scope.list=lists;
			$scope.delete=function(li)
			{
				var index=$scope.list.indexOf(li);
				$scope.list.splice(index,1);
			}
			$scope.add=function(newitem)
			{
				$scope.list.push(newitem);
			}
		
});