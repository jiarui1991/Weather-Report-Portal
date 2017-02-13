// JavaScript Document
angular.module('weather', ['ngResource']);



//write Datacontroller function 
function DataController($scope, $http) {

   //initial data in input field
	$scope.city ='Boston';
	$scope.days = '3';

   //write getData function to fetch data from API
	$scope.getData = function() {
		
		$http.get(
				'http://api.worldweatheronline.com/free/v1/weather.ashx?key=4925da30d1aa95a1460e52de2c833d6c18fbba28',
				{
					params : {
						q : $scope.city,
						num_of_days: $scope.days
					}
				})
				.success(function(data, status, headers, config) {
				// Use X2JS to convert XML to JSON
		    var json = x2js.xml_str2json(data);
		    console.log(json.data);
		    $scope.items = json.data;
			
			    });
				
	}
	
	$scope.getData();
	
}



