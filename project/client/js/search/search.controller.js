angular.module('search.controller', ['ngAnimate', 'ui.bootstrap','ngCookies','firebase'])
/*.filter('filterHTML',function($sce){
	return function(text){
		return $sce.trustAsHtml(text);
	}
})*/
.directive('searchRescult', function () {
		return {
			restrict: 'EA',
			scope: {
				rescultdata: '='
			},
			templateUrl: '../views/searchrescult.html'
		}
	})
	.controller('SearchController',[ '$scope','searchResource','$cookies','$firebaseArray','$routeParams' ,
		function ($scope, searchResource,$cookies,$firebaseArray,$routeParams) {
		
		if($routeParams.txt)
		{
			searchResource.get({
				searchtext: $routeParams.txt
			}, function (response) {
				 
				$scope.label='Search Results';  
				$scope.rescult = JSON.parse(response.text);
			});
		}
		 var firebaseRef; 

		 //Refered stackoverflow for the code of generating the GUID
		function getGUID() {
		  function randomGenerator() {
		    return Math.floor((1 + Math.random()) * 0x10000)
		      .toString(16)
		      .substring(1);
		  }
		  return randomGenerator() + randomGenerator() + '-' + randomGenerator() + '-' + randomGenerator() + '-' +
		    randomGenerator() + '-' + randomGenerator() + randomGenerator();
		}


		 console.log($cookies.get('uniqueId'));
		  if($cookies.get('uniqueId')!= undefined)
		  {
		  	// console.log('if');
 				$scope.cookieValue = $cookies.get('uniqueId');
				firebaseRef = new Firebase("https://fiery-torch-1607.firebaseio.com/searchHistory").orderByChild('id').equalTo($scope.cookieValue);
				$scope.searchHistory = $firebaseArray(firebaseRef);	
		  }
		  else
		  {
		  	// console.log('else');
		  	var expireDate = new Date();
  			expireDate.setDate(expireDate.getDate() + 3);
			$cookies.put('uniqueId', getGUID(), { expires: expireDate });
			$scope.cookieValue = $cookies.get('uniqueId');
			firebaseRef = new Firebase("https://fiery-torch-1607.firebaseio.com/searchHistory").orderByChild('id').equalTo($scope.cookieValue);
			$scope.searchHistory = $firebaseArray(firebaseRef);
			}
		

		$scope.addSearchHistory = function() 
		{
		  	var isFound='0';
		  	angular.forEach($scope.searchHistory,function(item,key)
		  		{
		  			if(item.id==$cookies.get('uniqueId') && item.text==$scope.searchText)
		  			{
		  				isFound=1;
		  			}
		  		});

		  	if(isFound==='0')
		  	{
			    $scope.searchHistory.$add({
			      text: $scope.searchText,
			      id: $cookies.get('uniqueId')		      
			    });
		    }
		};	
		
		// console.log(getGUID());
		$scope.getSearchRescult = function () {
			searchResource.get({
				searchtext: $scope.searchText
			}, function (response) {
				 
				$scope.label='Search Results';  
				$scope.rescult = JSON.parse(response.text);
			});	
		};
}]);