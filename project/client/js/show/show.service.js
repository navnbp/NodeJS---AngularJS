angular.module('show.service', [])
	.factory('ShowService', function ($resource) {
		/*console.log('In factory');*/
		return $resource('/api/show/:id');
	});