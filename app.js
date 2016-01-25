var application = angular.module('myapp', []); 
	application.controller("HelloController", function($scope) {
			$scope.hello = {};
			$scope.hello.title = "World";

			$scope.printTitle = function() {
				console.log($scope.hello.title);
			}
		});
	application.controller("PetController",function($scope) {
			$scope.petSelect = {}
			$scope.petSelect.select = "";
			$scope.petSelect.selectOptions = [
				"",
				"Dogs", 
				"Cats", 
				"Dogs and Cats",
				"Neither"
			];
		});
	application.controller("numController",function($scope) {
			$scope.data = {};
			numChoice : null;		
		});
	application.controller("tipController",function($scope){
			$scope.selectTip = [.10,.15,.20];
		});
	application.controller("madController", function($scope) {
			$scope.toggle = false;

			$scope.toggleme = function(){
				$scope.toggle = !$scope.toggle;
			};
		});
	application.controller("passwordController",function($scope) {
			$scope.isValid = false;
			$scope.pass = "";
	});
	application.controller("cameraController", function($scope) {
			$scope.cameras = [];
	
	});
	application.controller("exerciseController", function($scope){
			$scope.favColor = "Purple";
			$scope.secondsInACentury = (100*365*24*60*60)
			$scope.rightNow = new Date();
	})

		
		
		
