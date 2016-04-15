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

app.controller('searchByIngredientsController', ['$scope', '$http', function($scope, $http){

    $scope.ingredientTypedIn = [];

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

    $scope.submitIngredients = function(){
        console.log($scope.ingredientTypedIn);
        $http.get("/whatCanIMake", {params: $scope.ingredientTypedIn})
            .then(function(response){
            $scope.list = response.data;
            $scope.recipes = response;
        });
    };

}]);
