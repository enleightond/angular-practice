var app = angular.module ('moviedb');

app.controller('OmdbController', function($scope, $http, $location, MovieList){
	$scope.submit = function(form){		
		var movieTitle = $scope.findMovie.replace(' ','+');
		$scope.movieList = MovieList;
		$http.get('http://www.omdbapi.com/?s=' + movieTitle).then(function(data){
			MovieList.results = data.data.Search;
			console.log(MovieList.results);
			$location.path('/omdbID');
		});
	}	
}); 

app.controller("MovieController", function($scope, $http, MovieList){
	$scope.movieList = MovieList;
})

app.factory('MovieList', function(){
	var searchlist = {};
	searchlist.results = [];
	return searchlist;
})