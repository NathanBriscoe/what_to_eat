/**
 * Created by NathanBriscoe on 3/28/16.
 */
var app = angular.module('WhatToEat', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        //routing to the main page
        .when('/index.html', {
            templateUrl: 'views/index.html',
            controller: 'homeController'
        })
        //routing to the recipes page
        .when('/recipes', {
            templateUrl: 'views/recipes.html',
            controller: 'searchByController'
        })
        //routing to the build a recipe page
        .when('/buildrecipes', {
            templateUrl: 'views/buildrecipes.html',
            controller: 'buildRecipe'
        })
        //routing to the meal planner page
        .when('/mealPlanner', {
            templateUrl: 'views/mealPlanner.html',
            controller: 'mealPlanning'
        })
        //routing to the grocery shopping list
        .when('/shoppingList', {
            templateUrl: 'views/shoppinglist.html',
            controller: 'shoppingList'
        });

    $locationProvider.html5Mode(true);

    }]);

//Controller for the home...?
app.controller('homeController', ['$scope', '$location', function ($scope, $location) {

    $scope.openNav = function() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    };

    $scope.closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    };
    //buttons that run the function to the url saying go to this page
    //button click function brings us to the recipes pages
    $scope.recipes = function(){
        $location.path('/recipes')
    };
    //button click function brings us to the build recipes page
    $scope.buildRecipes = function(){
        $location.path('/buildrecipes')
    };
    //button click function brings us to the meal planner page
    $scope.mealPlanner = function(){
        $location.path('/mealPlanner')
    };
    //button click function brings us to the shopping list page
    $scope.shoppingList = function(){
        $location.path('/shoppingList')
    };
    //time on the main page
    $scope.today = moment().format('MMMM Do YYYY');

    var myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("clock").innerHTML =
            new Date().toLocaleTimeString();
    }

}]);

//Controller for the recipes List
app.controller('buildRecipe', ['$scope', '$http', function ($scope, $http) {

    $scope.list = [];
    $scope.one = "";
    $scope.two = "";
    $scope.three = "";

    $scope.submitRecipe = function() {
        if ($scope.one && $scope.two && $scope.three) {
            var string = this.one + " " + this.two + " " + this.three;
            $scope.list.push(string);
            $scope.one = '';
            $scope.two = '';
            $scope.three = '';
        }
    };

    $scope.removeIngredient = function(ingredient){
        console.log("fire");
        $scope.list.splice(ingredient, 1)
    };

    $scope.steps = [];
    $scope.singleStep = "";

    $scope.addStep = function(){
        if($scope.singleStep){
            $scope.steps.push(singleStep);
            $scope.singleStep="";
        }
    };

        $scope.removeStep = function(step){

        }

}]);

//Controller to search by ingredients
app.controller('searchByController', ['$scope', '$http', function($scope, $http){

    $scope.ingredientTypedIn = [];

    $scope.addNewIngredient = function(){

        $scope.errortext = "";
        //if not anything return nothing
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
        //console.log($scope.ingredientTypedIn);
        $http.get("/whatCanIMake", {params: $scope.ingredientTypedIn})
            .then(function(response){
            $scope.list = response.results;
            $scope.recipes = response;
        });
    };

}]);

app.controller('mealPlanning', ['$scope', '$http', function($scope, $http){

}]);

app.controller('shoppingList', ['$scope', '$http', function($scope, $http){
        $scope.todoList = [{todoText:'Eggs', done:false}];

        $scope.todoAdd = function() {
            $scope.todoList.push({todoText:$scope.todoInput, done:false});
            $scope.todoInput = "";
        };

        $scope.remove = function() {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.todoList.push(x);
            });
        }
}]);