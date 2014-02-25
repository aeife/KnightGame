/**
 * Created by aeife on 23/02/14.
 */

angular.module('knightGame.knight', [])

    .factory('Knight', function(){

        function Knight(health, damage) {
            this.health = health;
            this.attackValue = damage;
            this.armorValue = 0;
            this.dead = false;
        }

        Knight.prototype.getHealth = function () {
            return this.health;
        }

        Knight.prototype.getAttackValue = function () {
            return this.attackValue;
        }

        Knight.prototype.takeDamage = function (damage) {
            this.health -= damage;
            if (this.health < 0) {
                this.health = 0;
                this.dead = true;
            }
        }

        Knight.prototype.attack = function (enemy) {
            enemy.takeDamage(this.attackValue);
        }

        return Knight;

    })

    .directive('knight', function() {
        return {
            templateUrl: 'src/knightGame/knight.html',
            restrict: 'E',
            scope: {
                obj: '=',
                status: '='
            },
            controller: function($scope) {
                $scope.getImgColor = function(){
                    if ($scope.status.current) {
                        return 'green';
                    } else if ($scope.status.next) {
                        return 'red';
                    } else {
                        return 'black';
                    }
                }
            }
        }
    });