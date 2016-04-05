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

    app.controller('homeController', ['$scope', function ($scope) {

    }]);

    app.controller('recipeListsController', ['$scope', function ($scope) {

    }]);



