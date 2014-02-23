/**
 * Created by aeife on 23/02/14.
 */

angular.module('knightGame', ['knightGame.knight'])

    .factory('knightGame', function($log) {
        var config = {
            knightCount: 10,
            strategy: null
        };

        return {
            start: function () {
                $log.info("starting the simulation...");
            },
            config: function (newConfig) {
               angular.extend(config, newConfig);
            },
            getConfig: function () {
                return config;
            }
    }
    });