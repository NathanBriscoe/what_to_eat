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
        })
        .when('/buildrecipes', {
            templateUrl: 'views/buildrecipes.html',
            controller: 'buildRecipeController'
        });

    $locationProvider.html5Mode(true);

    }]);
                    //Controller for the home...?
    app.controller('homeController', ['$scope', '$location', function ($scope, $location) {
        $scope.recipes = function(){
            $location.path('/recipes')
        };
        $scope.buildRecipes = function(){
            $location.path('/buildrecipes')
        };
    }]);
                    //Controller for the recipes List
    app.controller('recipeListsController', ['$scope', '$http', function ($scope, $http) {
        $scope.$watch('search', function(){
            fetch();
            function fetch(){
                $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
                    .then(function(response){ $scope.details = response.data; });

                $http.get("http://www.omdbapi.com/?s=" + $scope.search)
                    .then(function(response){ $scope.related = response.data; });
            }
        })
    }]);
                //Controller for building recipes
    app.controller('buildRecipesController', ['$scope', '$location', function ($scope, $location) {

    }]);


