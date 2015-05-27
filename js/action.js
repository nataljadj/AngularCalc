(function(){
	calcModel = {
		number: 0,
		operation: '',
		result: 0,
		output: '',

		reset: function(){
			this.number = 0;
			this.operation = '';
			this.result = 0;
			this.output = '';
		},

		chooseOperation: function(setoperation){
			this.operation = setoperation;
			if (calcModel.number === '0') {
				this.calcModel.output += 0;
			}
			this.output += " " + this.operation + " ";
			this.getResult();

		},
	};

	var appCalc = angular.module('appCalc',['ngRoute']);
	appCalc.config(function($routeProvider){
		$routeProvider

			.when('/',{
				templateUrl : 'pages/home.html',
				controller  : 'myCtrl'
			})
	});
	appCalc.controller('myCtrl',['$scope', function($scope){
		$scope.calculator = calcModel;
		$scope.buttonClick = function(value){
			if(value === 'Ce'){
				calcModel.output = '' ;
			}
			if (value === '=') {

			}
			else{
				calcModel.number += value;
		 		calcModel.output += value;
			}
		}}]);
})();