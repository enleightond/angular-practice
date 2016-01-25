var application = angular.module('reddit', ['ngAnimate']);

app.controller('RedditController', function($scope) {
	$scope.view.sortableFields = ['votes', 'date', 'title'];
	$scope.view.posts[
	{
		title:"First title",
		author:"An author",
		image:"https://placebear.com",
		description:"a lot of test parameters"
		date:moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
	}]
}