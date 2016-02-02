var app = angular.module ('moviedb');

app.controller('OmdbController', function($scope, $http, $location, MovieList){
	$scope.submit = function(form){		
		var movieTitle = $scope.findMovie.replace(' ','+');
		$scope.movieList = MovieList;
		$http.get('http://www.omdbapi.com/?s=' + movieTitle).then(function(data){
			MovieList.results = data.data.Search;
			console.log(MovieList.results);
			$location.path('/results');
		});
	}	
}); 

app.controller("ResultController", function($scope, $http, $location, MovieList){
	$scope.movieClick = function(data){
		$scope.movieList.results.data.Title
		console.log($scope.movieList.results.data.Title);
		$scope.movieList.results.data.Poster;
		console.log($scope.movieList.results.data.Poster);
		$location.path('/movie');
	}
	$scope.movieList = MovieList;
});

app.controller("MovieController", function($scope, $http, $location,  MovieList){
	var movieHax = $location.$$path.split('/')[1];
	$http.get('http://www.omdbapi.com/?i=' + movieHax).then(function(data){

		$scope.titleData = data.data.Title;
		$scope.posterData = data.data.Poster;
	})

});

app.factory('MovieList', function(){
	var searchlist = {};
	searchlist.results = [];
	return searchlist;
})

app.factory('Movie', function(){
	var movie = {};
	searchlist.results = [];
	return searchlist;
})


