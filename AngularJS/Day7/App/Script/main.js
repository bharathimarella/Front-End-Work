var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
			var lists=[
			{name:"abc",age:"29",gender:"m",dateOfJoining:new Date("June 30,2015"),salary:"600000"},
			{name:"def",age:"28",gender:"f",dateOfJoining:new Date("Jan 30,2016"),salary:"1000000"},
			{name:"ghi",age:"27",gender:"m",dateOfJoining:new Date("April 1,2011"),salary:"1000000000"},
			{name:"jkl",age:"26",gender:"f",dateOfJoining:new Date("Feb 1,2016"),salary:"100000"},
			{name:"mno",age:"26",gender:"m",dateOfJoining:new Date("Feb 1,2016"),salary:"75000"},
			{name:"dgsf",age:"26",gender:"f",dateOfJoining:new Date("Feb 1,2016"),salary:"90000"},
			];
			$scope.lists=lists;
});
