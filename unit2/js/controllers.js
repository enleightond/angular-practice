var app = angular.module ('moviedb');

app.controller('OmdbController', function($scope, $http){
	$scope.submit = function(form){		
		var movieTitle = $scope.findMovie.replace(' ','+');
		var results = $http.get('http://www.omdbapi.com/?t='+ movieTitle).then(function(data){
			console.log('http://www.omdbapi.com/?t='+ movieTitle.data.title)
		});
	}

	
}); 

app.controller("MovieController", function($scope, $http){
	$scope.results = function(movieResult){
		var imdbID = $http.get('http://www.omdbapi.com/?i='+ ).then(function(data){
			console.log(data.data.imdbID)
			console.log(data.data.Poster)
		});
	}
})