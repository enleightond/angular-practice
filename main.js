var application = angular.module('reddit', ['ngAnimate']);

application.controller('redditController', function($scope) {
	$scope.votes = 0;
	$scope.newPost = {"rating": $scope.votes};
	$scope.view = {};
	$scope.view.sortOptions = ['-rating', 'date', 'title'];
	$scope.view.setOrderVal = function(sort){
		$scope.view.currentSort = sort;
	};
	$scope.view.searchText = "";
	$scope.view.newPostShow = false;
	$scope.posts = [];
	$scope.date = moment().calendar();

	$scope.posts.push({
		title: 'Abacus',
		image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boulier1.JPG',
		author: 'BamBam',
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		rating: 4
	})

		$scope.posts.push({
		title: 'Calculator',
		image: 'http://www.ledwatches.net/photos56/piotr/hughes_led_calc2.jpg',
		author: 'CalcDude',
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		rating: -2
	})
	

	$scope.checkForError = function(input){
		if (input.$valid || input.$untouched) {
			return false;
		} else {
			return true;
		}
	}

	$scope.newPostShow = function() {
		$scope.view.newPostShow = true;		
	}

	$scope.addPost = function (form){
		if (form.$valid) {
			$scope.posts.push($scope.newPost);
			$scope.newPost = {"rating": $scope.votes};
			console.log($scope.posts)
			$scope.view.newPostShow = false;
		}
	}

	$scope.upVote = function (post){
		post.rating += 1; 
	}
	$scope.downVote = function (post){
		post.rating -= 1; 
	}


})

application.filter('removeMinus', function(){
	return function(input){
		if (input === '-rating') {
			return input.replace(/-/g , "");
		} else {
			return input;
		}
	}
})