angular.module('show.controller',[])
	.controller('ShowController',function ($scope, show) {
		/* console.log('In controller');*/
		$scope.show = show;
	});