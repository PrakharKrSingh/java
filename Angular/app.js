// app.js
var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.message = "Welcome to the Basic AngularJS App!";
  $scope.name = "";
});
