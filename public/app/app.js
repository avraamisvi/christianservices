'use strict';

/* App Module */

var christianservicesApp = angular.module('christianservicesApp', [
 	'ngRoute',
 	'christianservicesControllers'
]);

christianservicesApp.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.
      when('/main', {
        templateUrl: '/app/partials/main.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);

$(document).foundation();