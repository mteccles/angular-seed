'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
    .controller('MyCtrl1', ['$scope', 'Recipe', function ($scope, Recipe) {
        Recipe().then(function (response) {
            $scope.recipe = response.data;
        });


    }])
    .controller('MyCtrl2', [function () {

    }]);
