/**
 * Created by aeife on 23/02/14.
 */

angular.module('knightGame', ['knightGame.knight'])

    .factory('knightGame', function($log) {
        return {
            start: function(){
                $log.info("starting the simulation...");
            }
        }
    });