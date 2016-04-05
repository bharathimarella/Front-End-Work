var myApp=angular
				.module("myModule",[])
				.controller("myController",function($scope,stringTransform){
				$scope.transform=function(input)
				{
					$scope.output=stringTransform.addSpace(input);
				}

				});