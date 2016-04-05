var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
				
			var lists=[
			{name:"a",age:"29",dateOfJoining:new Date("June 30,2015"),salary:"100000"},
			{name:"b",age:"28",dateOfJoining:new Date("Jan 30,2016"),salary:"95000"},
			{name:"c",age:"27",dateOfJoining:new Date("April 1,2011"),salary:"120000"},
			{name:"d",age:"26",dateOfJoining:new Date("Feb 1,2016"),salary:"90000"},
			];
			$scope.lists=lists;
			$scope.limit=4;
			$scope.order="+age";
			

				
});
