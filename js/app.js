var app = angular.module("OutboxApp",[]);

////////////////////////////////////////////
///// 		ROUTING
///////////////////////////////////////////////

	/* 
	* define the routes for the app
	* Use .when() to map the URL /outbox to the controller HomeController and the template views/home.html.
	* Use .when() to map the URL /outbox/:id to the controller EmailController and the template views/email.html.
	* Otherwise if a user accidentally visits a URL other than the two above, use .otherwise() to redirect to /outbox.
	*/

	app.config(function ($routeProvider) { 
	  $routeProvider 
	    .when('/outbox', { 
	      controller: 'HomeController', 
	      templateUrl: 'views/home.html' 
	    }) 
	    .when('/outbox/:id', { 
	      controller: 'EmailController', 
	      templateUrl: 'views/email.html' 
	    }) 
	    .otherwise({ 
	      redirectTo: '/outbox' 
	    }); 
	});

///////////////////////////////////////////////
///// 		END ROUTING
///////////////////////////////////////////////