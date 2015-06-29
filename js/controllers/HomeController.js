/* 
* don't forget to use quotes around 'emails' service name in the arguments for the controller
* after you set this up, attach the controller to the .main element or target
*/

app.controller('HomeController', ['$scope', 'emails', function($scope,emails) {
	// don't forget to change forecast.success to emails.success to match the name of your service
  emails.success(function(data) {
  	// set the property you create 'emailServe' to equal the data object that was returned
  	// anything in scope can now be used... i.e. it's now 'available' for use
    $scope.emailServe = data;
  });
}]);