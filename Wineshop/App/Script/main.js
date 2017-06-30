var myApp=angular
				.module("myModule",["ngRoute"])
				.config(function($routeProvider){
				     $routeProvider.caseInsensitiveMatch=true;
                     $routeProvider
					.when('/home', {
                		templateUrl : 'Template/home.html',
               			 controller  : 'homeController'
            		})
                    .when('/about', {
                        templateUrl : 'Template/about.html',
                         controller  : 'homeController'
                    })
                })
                .controller("homeController",function($scope){
                    $scope.append="Template/test.html";
                   $scope.show=function(menu)
                   {
                    $scope.append="Template/menu.html";
                   },
                   $scope.shw=function(test)
                   {
                    $scope.append="Template/test.html";
                   }
                });