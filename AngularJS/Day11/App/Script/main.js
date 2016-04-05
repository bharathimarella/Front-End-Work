var myApp=angular
				.module("myModule",["ngRoute"])
				
				
				// .controller("city",function($scope){
				// 	$scope.name="Chicago";
				// })
				// .controller("state",function($scope){
				// 	$scope.name="Illinois";
    //             })
    //             .controller("country",function($scope){
    //                 $scope.name="USA"
                    
    //             });
    .controller("city",function(){
                  this.name="Chicago";
                 })
                .controller("state",function(){
                 this.name="Illinois";
               })
                 .controller("country",function(){
                    this.name="USA"
                    
                });