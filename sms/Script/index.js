var myApp=angular
                .module("myModule",['ui.bootstrap','ui.router','ngAnimate','ngRoute'])
                .config(function($routeProvider){
				     								$routeProvider.caseInsensitiveMatch=true;
                  $routeProvider
																		.when('/home', {
                			templateUrl : 'Templates/Home.html',
               			 controller  : 'HomeController'
            						})
                  .when('/about', {
                   templateUrl : 'Templates/aboutUs.html',
                   controller  : 'HomeController'
                  })
                  .when('/sale', {
                   templateUrl : 'Templates/sales.html',
                   controller  : 'HomeController'
                  })
                  .otherwise({
      													redirectTo:"/home"
        										})
                })
                .controller("HomeController",function($scope){
                	$scope.myInterval = 2000;
  															$scope.noWrapSlides = false;
  															$scope.active = 0;
  															var slides = $scope.slides = [];
  															var currIndex = 0;
  															$scope.addSlide = function() {
    														var newWidth = 1 + slides.length + 1;
    														slides.push({
      													image: 'Image/slide' + newWidth+'.jpg',
      													text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 20],
      													id: currIndex++
    														});
    													};
																	$scope.randomize = function() {
    														var indexes = generateIndexesArray();
    														assignNewIndexesToSlides(indexes);
  															};
																	for (var i = 0; i < 5; i++) {
    														$scope.addSlide();
    													}
																	// Randomize logic below
																	function assignNewIndexesToSlides(indexes) {
    														for (var i = 0, l = slides.length; i < l; i++) {
      												slides[i].id = indexes.pop();
      												}
  															}
																	function generateIndexesArray() {
   													 var indexes = [];
    														for (var i = 0; i < currIndex; ++i) {
      												indexes[i] = i;
    														}
    													return shuffle(indexes);
  															}
																 // http://stackoverflow.com/questions/962802#962890
  															function shuffle(array) {
    														var tmp, current, top = array.length;
																		if (top) {
      													while (--top) {
        											current = Math.floor(Math.random() * (top + 1));
        											tmp = array[current];
        											array[current] = array[top];
        											array[top] = tmp;
      													}
    														}
    														return array;
    													}
                });