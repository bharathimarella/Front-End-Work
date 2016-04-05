var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
				
			var candidates=[
			{name:"Hillary",votes:0},
			{name:"Trump",votes:0},
			{name:"Ted",votes:0}
			];
			$scope.candidates=candidates;
	$scope.increment=function(candi)
	{
		candi.votes++;
	}			
});
