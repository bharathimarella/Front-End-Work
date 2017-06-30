var myApp=angular
				.module("myModule",['ui.bootstrap','ngAnimate','ngRoute'])
				.config(function($routeProvider){
				$routeProvider.caseInsensitiveMatch=true;
                $routeProvider
                //Routing for Navigation bar Menu(Main Menu)
              .when('/home', {
                		templateUrl : 'Templates/home.html',
               			 controller  : 'homeController'
            	})
              .when('/who', {
                        templateUrl : 'Templates/who.html',
                         controller  : 'whoController'
                })
                .when('/what', {
                        templateUrl : 'Templates/what.html',
                         controller  : 'whatController'
                })
                
                .when('/services', {
                        templateUrl : 'Templates/services.html',
                         controller  : 'servicesController'
                })
                .when('/contact', {
                        templateUrl : 'Templates/contactUs.html',
                         controller  : 'contactController'
                })
                .otherwise({
      					         redirectTo:"/home"
        			   })
                
                //Routing For Service Dropdown Menu
                .when('/serviceProducts', {
                        templateUrl : 'Templates/serviceProducts.html',
                         controller  : 'serviceProductsController'
                })
                .when('/technicalSupport', {
                        templateUrl : 'Templates/technicalSupport.html',
                         controller  : 'technicalSupportController'
                })
                .when('/networkInfrastructure', {
                        templateUrl : 'Templates/networkInfrastructure.html',
                         controller  : 'networkInfrastructureController'
                })
                })
                
                .controller("homeController",function($scope)
                           {
                    
                })
                .controller("whoController",function($scope)
                           {
                   
                  
                })
                .controller("whatController",function($scope)
                           {
                    
                })
                .controller("servicesController",function($scope)
                           {
                    
                })
                .controller("contactController",function($scope)
                           {
                    $scope.result = 'hidden'

    $scope.resultMessage;

    $scope.formData; //formData is an object holding the name, email, subject, and message

    $scope.submitButtonDisabled = false;

    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted

    $scope.submit = function(contactform) {

        $scope.submitted = true;

        $scope.submitButtonDisabled = true;

        if (contactform.$valid) {

            $http({

                method  : 'POST',

                url     : 'Templates/contact-form.php',

                data    : $.param($scope.formData),  //param method from jQuery

                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)

            }).success(function(data){

                console.log(data);

                if (data.success) { //success comes from the return json object

                    $scope.submitButtonDisabled = true;

                    $scope.resultMessage = data.message;

                    $scope.result='bg-success';

                } else {

                    $scope.submitButtonDisabled = false;

                    $scope.resultMessage = data.message;

                    $scope.result='bg-danger';

                }

            });

        } else {

            $scope.submitButtonDisabled = false;

            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';

            $scope.result='bg-danger';

        }

    }

                })
$(document).ready(function()
{
   $('#carouselHacked').carousel();
    $('#carousel-example-generic').carousel();
    $(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
				} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});

});