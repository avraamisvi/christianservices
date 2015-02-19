'use strict';

/* App Module */

var gopresentationApp = angular.module('christianservicesApp', [
 	'ngRoute',
 	'christianservicesControllers'
]);

gopresentationApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: '/public/app/partials/main.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);