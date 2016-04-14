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
        $scope.today = moment().format('MMMM Do YYYY');

        var myTimer = setInterval(myClock, 1000);
        function myClock() {
            document.getElementById("demo").innerHTML =
                new Date().toLocaleTimeString();
        }
    }]);
                    //Controller for the recipes List
    app.controller('recipeListsController', ['$scope', '$http', function ($scope, $http) {

    }]);
                //Controller for building recipes
    app.controller('buildRecipesController', ['$scope', '$location', function ($scope, $location){
        //$scope.addIngredient = function

    }]);

    app.controller('searchByIngredientsController', ['$scope', '$http', function($scope, $http){

        $scope.ingredientTypedIn = [];
        //$scope.data = [];

        $scope.addNewIngredient = function(){
            $scope.errortext = "";
            if (!$scope.addMe) {return;}
            if ($scope.ingredientTypedIn.indexOf($scope.addMe) == -1) {
                $scope.ingredientTypedIn.push($scope.addMe);
            } else {
                $scope.errortext = "The ingredient is already entered.";
            }
            $scope.addMe = "";
        };

        $scope.removeItem = function(ingredients){
            $scope.errortext = "";
            $scope.ingredientTypedIn.splice(ingredients, 1);

        };

//[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]





        //This is a bunch of nonsense below. I'm testing

        $scope.submitIngredients = function(ingredientTypedIn){
            console.log("We are going to go look for ");
            console.log(ingredientTypedIn);
            $http.get("http://www.recipepuppy.com/api/?i=" + ingredientTypedIn + "").then(function(response){
                $scope.list = response.data;
                console.log(ingredientTypedIn);
                $scope.recipes = response;
                $scope.ingredientTypedIn = [];
                //$scope.data = [];
                //$scope.data.push(response.data);
                //$scope.ingredientTypedIn.push(response.data);
            });
        };

    }]);
