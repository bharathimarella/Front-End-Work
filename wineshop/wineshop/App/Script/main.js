var myApp=angular
				.module("myModule",['ui.bootstrap','ngAnimate','ngRoute'])
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
                .when('/submenu', {
                        templateUrl : 'Template/submenu.html',
                         controller  : 'submenuController'
                })
                .when('/NewWine', {
                        templateUrl : 'Template/submenu.html',
                         controller  : 'submenuController'
                })
                .when('/services', {
                        templateUrl : 'Template/services.html',
                         controller  : 'servicesController'
                })
                .when('/contactUs', {
                        templateUrl : 'Template/contactUs.html',
                         controller  : 'contactController'
                })
                .when('/submit', {
                        templateUrl : 'Template/submit.html',
                         controller  : 'contactController'
                })
                .otherwise({
      					         redirectTo:"/home"
        			   })
                })
                .controller("homeController", function($scope,$location,$anchorScroll){
				   $scope.scroll=function(scrolllocation)
				   {	
					   $location.hash(scrolllocation);
					   $anchorScroll();
				   } 
                   $scope.append="Template/test.html";
                   $scope.show=function(menu)
                   {
                      $scope.append="Template/menu.html";
                   },
                   $scope.shw=function(test)
                   {
                      $scope.append="Template/test.html";
                   }
                   
                })
                .controller("submenuController",function($scope,$http,$log){
                  $http.get("Data/products.json")
                  .success(function(datas){
                    $scope.product=datas;
                  });
                })
                .controller("contactController",function($scope){
                })
                .controller("servicesController",function($scope,$log,$window){
                  $scope.showStep1="Template/step1.html";
                  $scope.showStep2="Template/step2.html";
                  $scope.showStep3="Template/step3.html";
                  $scope.locations= ['Boston','NewYork','Chicago','SanFrancisco','Dallas','st.Louis','Los Angeles','Philadelphia'];
                  $scope.pop1={disabled:true};
                  $scope.pop2={disabled:true};
                  $scope.toggled = function(open) 
                  {
                    $log.log('Dropdown is now: ', open);
                  };
                  $scope.getlctn=function(loc)
                  { 
                    $scope.hide=true;
                    $scope.lctn=loc;
                    console.log($scope.lctn);
                  };
                  $scope.open1 = function() 
                  {
                    $scope.popup1.opened = true;
                  };
                  $scope.open2 = function()
                  {
                    $scope.popup2.opened = true;
                  };
                  $scope.popup1 = {
                    opened: false
                  };
                  $scope.popup2 = {
                    opened: false
                  };
                  $scope.goToStep2=function(fname,lname,phone)
                  {
                    $scope.firstname=fname;
                    $scope.lastname=lname;
                    $scope.phone=phone;
                    $scope.pop1.disabled=false;
                    $scope.active=1;
                  }
                  $scope.goToStep3=function(loc,msales,mstock,license)
                  {
                    $scope.location=loc;
                    $scope.sales=msales;
                    $scope.stock=mstock;
                    $scope.license=license;
                    $scope.pop2.disabled=false;
                    $scope.active=2;
                  }
                });




    
          

