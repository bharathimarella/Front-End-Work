var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
			var lists=[
			{name:"abc",age:"29",gender:"m",dateOfJoining:new Date("June 30,2015"),salary:"6000"},
			{name:"def",age:"28",gender:"f",dateOfJoining:new Date("Jan 30,2016"),salary:"9000"},
			{name:"ghi",age:"27",gender:"m",dateOfJoining:new Date("April 1,2011"),salary:"5000"},
			{name:"jkl",age:"26",gender:"f",dateOfJoining:new Date("Feb 1,2016"),salary:"8000"},
			{name:"mno",age:"26",gender:"m",dateOfJoining:new Date("Feb 1,2016"),salary:"7000"},
			{name:"dgsf",age:"26",gender:"f",dateOfJoining:new Date("Feb 1,2016"),salary:"9000"},
			];
			var images=["Image/img1.jpg","Image/img2.jpg","Image/img3.jpg","Image/img4.jpg","Image/img5.jpg","Image/img6.jpg"];
			$scope.lists=lists;
			$scope.images=images;
            $scope.showTable="list.html";//intial  view of page is set to list.html
           $scope.order="name";
           $scope.sorting=false;
            $scope.sortColumn=function(heading)
            {
            	$scope.sorting=($scope.order==heading ? !$scope.sorting:false)
            	$scope.order=heading;
            }
            
            
});
