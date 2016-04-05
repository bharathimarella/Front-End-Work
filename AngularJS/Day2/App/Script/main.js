var myApp=angular.module("myModule",[]);
var myController=function($scope){
	$scope.message="protek chicago";//scope is the object & $scope.message is the module.
}
myApp.controller("cntrl",myController);
myApp.controller("cntrl2",function($scope){
	var employee={firstname:'bharathi',lastname:'marella',gender:'female'};
	$scope.emp=employee;
});
	var myCntrl=function($scope){
	$scope.msg="Welcome";
	var employee={name:"bharathi",lastname:'marella',gende:'female'}
	$scope.employee=employee;
	var des=['developer','designer','Analyst'];
	$scope.des=des;
	var company=[{name:'infosys',place:'India'},{name:'jpmorgan',place:'USA'}]///this object have more than one propety sso called as complex obect
	$scope.cmpny=company;
	$scope.clr="yellow";
}
myApp.controller("cntrl3",myCntrl);