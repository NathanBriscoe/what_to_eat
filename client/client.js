/**
 * Created by NathanBriscoe on 3/28/16.
 */
var app = angular.module('WhatToEat', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/index.html', {
            templateUrl: 'views/index.html',
            controller: 'homeController'
        })
        .when('/recipes', {
            templateUrl: 'views/recipes.html',
            controller: 'recipeListsController'
        });

    $locationProvider.html5Mode(true);

    }]);

    app.controller('homeController', ['$scope', '$http', function ($scope, $http) {
        $scope.recipes = function(){
            $http.get('/recipes')
                .then(function(response){
                    $scope.content = response.data;
                });
        };
    }]);

    app.controller('recipeListsController', ['$scope', function ($scope) {

    }]);



