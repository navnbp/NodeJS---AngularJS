var app = angular.module('app', 
	['ngRoute', 'ngResource', 'search.controller','schedule.controller','favorite.controller'
	,'show.controller','search.service','show.service','history.controller'])/**/
	.filter('filterHTML',function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	}})
.config(['$routeProvider', '$locationProvider', 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/search.html',
					controller: 'SearchController'
				})
				.when('/schedules', {
					templateUrl: 'views/schedule.html',
					controller: 'ScheduleController'
				})
				.when('/favorites', {
					templateUrl: 'views/favorite.html',
					controller: 'FavoriteController'
				}).
				when('/history', {
					templateUrl: 'views/history.html',
					controller: 'HistoryController'
				})
				.when('/show/:id', {
         			 templateUrl: 'views/show.html',
          			 controller: 'ShowController',
          			  resolve: 
          			  {
            			show: function ($route, ShowService) {
              				return ShowService.get({id: $route.current.params.id});
            					}
          			  }
       			 })
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);

	