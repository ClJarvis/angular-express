'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'partials/login',
      controller: 'MyCtrl1'
    }).
    when('/logout', {
      templateUrl: 'partials/logout',
      controller: 'MyCtrl2'
    }).
    when('/todo', {
      templateUrl: 'partials/todo',
      controller:'TodoCtrl'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);

  console.log($('.menu'));
});
