/**
 * Created by aeife on 23/02/14.
 */

var app = angular.module('app', ['knightGame', 'ngRoute']);

app.config(function($routeProvider){

});

app.controller('AppCtrl', function($scope, knightGame) {
    $scope.msg = "Hello, World!";

    knightGame.start();
});