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


	$scope.movieClick = function(movieId){
		$location.path(movieId+'/movie');
	}
	$scope.movieList = MovieList;
});

app.controller("MovieController", function($scope, $http, $location,  MovieList){
	var movieHax = $location.$$path.split('/')[1];
	$http.get('http://www.omdbapi.com/?i=' + movieHax).then(function(data){

		// $scope.titleData = data.data.Title;
		// $scope.posterData = data.data.Poster;
		$scope.allData = data.data
	})

});

app.factory('MovieList', function(){
	var searchlist = {};
	searchlist.results = [];
	return searchlist;
})


