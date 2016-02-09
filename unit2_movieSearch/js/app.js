var app = angular.module ('moviedb', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			//templateUrl: "partials/index.html", 
			controller: "OmdbController"
		})
		.when('/results', {
			templateUrl: "partials/results.html",
			controller: "ResultController"
		})
		.when('/:id/movie', {
			templateUrl: "partials/movie.html",
			controller: "MovieController"
		})

});