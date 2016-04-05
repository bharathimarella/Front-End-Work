var myApp=angular
				.module("myModule",["ngRoute"])
				.config(function($routeProvider){
				     $routeProvider.caseInsensitiveMatch=true;
                     $routeProvider
					.when('/home', {
                		templateUrl : 'Template/home.html',
               			 controller  : 'homeController'
            		})
            		.when('/course',{
            			//templateUrl:'Template/course.html',
            			//controller:'courseController'
                        template:'<h1>Course</h1>'
            		})
            		.when('/student',{
            			templateUrl:'Template/student.html',
            			controller:'studentController'
            		})
                    .when('/details/:index',{
                        templateUrl:'Template/details.html',
                        controller:'detailsController'
                    })
            		.otherwise({
      					redirectTo:"/home"
        			})
                })
				.controller("homeController",function($scope){
				})
				.controller("courseController",function($scope){
					$scope.course=["Html","CSS","JAVASCRIPT","ANGULAR JS","BOOTSTRAP"];
				})
				.controller("studentController",function($scope){
					$scope.student=[{name:'Student 1',gender:'Female',age:'26',city:'Schaumburg'},{name:'Student 2',gender:'Male',age:'30',city:'Palatine'},{name:'Student 3',gender:'Female',age:'28',city:'Chicago'},{name:'Student 4',gender:'Female',age:'27',city:'Aurora'},{name:'Student 5',gender:'Female',age:'26',city:'Naperville'},{name:'Student 6',gender:'Male',age:'26',city:'Schaumburg'}];
                })
                .controller("detailsController",function($scope,$routeParams){
                    $scope.student=[{name:'Student 1',gender:'Female',age:'26',city:'Schaumburg'},{name:'Student 2',gender:'Male',age:'30',city:'Palatine'},{name:'Student 3',gender:'Female',age:'28',city:'Chicago'},{name:'Student 4',gender:'Female',age:'27',city:'Aurora'},{name:'Student 5',gender:'Female',age:'26',city:'Naperville'},{name:'Student 6',gender:'Male',age:'26',city:'Schaumburg'}];
                    $scope.id=$routeParams.index;
                    console.log($scope.id);
                });