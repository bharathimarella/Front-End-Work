var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope,$filter){
				
			var lists=[
			{name:"aba",age:"29",dateOfJoining:new Date("June 30,2015"),salary:"10000"},
			{name:"bcb",age:"28",dateOfJoining:new Date("Jan 30,2016"),salary:"15000"},
			{name:"cdef",age:"27",dateOfJoining:new Date("April 1,2011"),salary:"16000"},
			{name:"dgsf",age:"26",dateOfJoining:new Date("Feb 1,2016"),salary:"17000"},
			];
			$scope.lists=lists;
			
			$scope.ordering="name";
			$scope.sorting=false;//false means ascending oreder
			$scope.sortData=function(heading)
			{
				$scope.sorting=($scope.ordering==heading ? !$scope.sorting:false)
				//for booleans ! is used to write the condition
				$scope.ordering=heading;
			}
$scope.formatArrow=function(heading)
{
	if($scope.ordering==heading)
	{
		return $scope.sorting ? "arrow-up" : "arrow-down"

	}
}
$scope.$watch('search', function (val) {//$watch() is in-built function

                $scope.search = $filter('lowercase')(val);

            });
				
});
