var app = angular.module('teaStore', ['ngRoute']);

app.directive('singleTea', function() {
	return {
		templateUrl: '/templates/teaTemplate.html',
		link: function(scope,element,attributes){
			console.log(scope);
		}
	};
});

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "partials/order.html",
		controller: "Selection"
	}).when('/checkout', {
		templateUrl: "partials/checkout.html",
		controller: "Checkout"
	});
})
