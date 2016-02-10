var app = angular.module('dogApp', ['ngRoute']);

application.controller('HomeController', function ($scope){
  $scope.message = "hello"

})

application.controller('DogController', function(){
  $scope.message = "Woof Woof!"

})<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.js"></script>