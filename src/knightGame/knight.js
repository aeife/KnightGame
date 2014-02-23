/**
 * Created by aeife on 23/02/14.
 */

angular.module('knightGame.knight', [])

    .factory('Knight', function(){

        function Knight(health, damage) {
            this.health = health;
            this.damage = damage;
        }

        return Knight;

    });