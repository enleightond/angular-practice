var app = angular.module('teaStore', ['ngRoute']);

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

app.directive('singleTea', function() {
	return {
		template: '_id'
	}
})