var application = angular.module('reddit', ['ngAnimate']);

application.controller('redditController', function($scope) {
	$scope.newPost = {};
	$scope.view = {};
	$scope.view.sortOptions = ['votes', 'date', 'title'];
	$scope.view.currentSort = $scope.view.sortOptions[0];
	$scope.view.searchText = "";
	$scope.view.newPostShow = false;
	$scope.posts = [];
	$scope.addVote = 0;

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
			$scope.newPost = {};
			console.log($scope.posts)
			$scope.view.newPostShow = false;
		}
	}

})