angular.module('history.controller', ['ngCookies','firebase'])
	.controller('HistoryController',['$scope','$cookies','$firebaseArray', function ($scope,$cookies,$firebaseArray) 
	{
		var firebaseRef;
		$scope.historyRes=[];
		 if($cookies.get('uniqueId')!= undefined)
		  {
		  	
 				$scope.cookieValue = $cookies.get('uniqueId');
				firebaseRef = new Firebase("https://fiery-torch-1607.firebaseio.com/searchHistory").orderByChild('id').equalTo($scope.cookieValue);
				$scope.historyRes = $firebaseArray(firebaseRef);	
		  }
		 
		
	}]);