'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', []);
  services.value('version', '0.1');

services.factory('Recipe', ['$http', function($http) {
    return function() {
        return $http.get("http://localhost:3000/wines/1");
        //return ['a','b','c'];
    }
}]);
