var appCalc = angular.module('appCalc',[]);
	appCalc.controller('myCtrl',['$scope', function($scope){
		$scope.output = '';
		$scope.number = [];
		$scope.operation = [];

		$scope.calculator = function(){

			while($scope.operation.length > 0){
				var first = $scope.number.pop();
				//if isNaN...
				var second = $scope.number.pop();
				// if isNaN
				var operator = $scope.operation.pop();

				$scope.number.push(calculate(first,second,operator));
				$scope.output = calculate(first,second,operator);
				console.log($scope.number);
				
			}
		}

		$scope.addNumber = function(value){
			
			$scope.output += value;
			$scope.number.push(parseFloat($scope.output));
			console.log($scope.number);
			
		}	

		$scope.addOperator = function(value){
			$scope.output = value;
			$scope.operation.push(value);
			$scope.output = '';
			console.log($scope.operation);
			
		}

		$scope.reset = function(){
			$scope.output = '';
			$scope.number = [];
			$scope.operation = [];
		}

			 function calculate(first,second,operator){
			 	switch(operator){
			 		case '+':
			 			return second + first;

			 		case '-':
			 			return second - first;
			 		case '*':
			 			return second * first;
			 		case '/':
			 			return second / first;
			 	}
			 	return 0;
			 }
	}]);