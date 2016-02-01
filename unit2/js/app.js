var app = angular.module ('moviedb', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			//templateUrl: "partials/index.html", 
			controller: "OmdbController"
		})
		.when('/omdbID', {
			templateUrl: "partials/movie.html",
			controller: "MovieController"
		})

});