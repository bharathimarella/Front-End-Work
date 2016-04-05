var myApp=angular
				.module("myModule",[])
				.controller("myController",function($scope,$location,$anchorScroll){
				$scope.scroll=function(scrolllocation)
				{	
					$location.hash(scrolllocation);
					$anchorScroll();
				} 

				});