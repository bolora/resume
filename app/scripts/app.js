'use strict';

angular.module('resumeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/examples', {
        templateUrl: 'views/examples.html',
        controller: 'ExamplesCtrl'
      })
      .when('/virtual-interview', {
        templateUrl: 'views/virtual-interview.html',
        controller: 'VirtualInterviewCtrl'
      })
      .when('/kudos', {
        templateUrl: 'views/kudos.html',
        controller: 'KudosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
