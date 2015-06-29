/* 
* using data from: 
* https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json
*
* you create a new service called "emails" and sub in the json link
* in the controller you use the service to fetch the emails
*/

app.factory('emails', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);