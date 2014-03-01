/**
 * Created by aeife on 23/02/14.
 */

var app = angular.module('app', ['knightGame', 'ngRoute']);

app.config(function($routeProvider){

});

app.controller('AppCtrl', function($scope, knightGame) {
    $scope.msg = "Hello, World!";

    $scope.knightGame = knightGame;

    knightGame.config({
        knightCount: 10
    });

    $scope.degs = [];
    for (var i = 0; i < knightGame.getConfig().knightCount; i++) {
        $scope.degs.push(360 / knightGame.getConfig().knightCount * i +270);
    }
    console.log($scope.degs);
    knightGame.start();
});