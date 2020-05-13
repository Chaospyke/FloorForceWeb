'use strict';

angular.
  module('floorForceApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/floors', {
          template: '<floor-page></floor-page>'
        }).
        when('/cabinets', {
          template: '<cabinet-page></cabinet-page>'
        }).
        when('/walls', {
          template: '<wall-page></wall-page>'
        }).
        when('/checkout', {
          template: '<checkout-page></checkout-page>'
        }).
        otherwise('/home');
    }
  ]);

