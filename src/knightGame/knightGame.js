/**
 * Created by aeife on 23/02/14.
 */

angular.module('knightGame', ['knightGame.knight'])

    .factory('knightGame', function($log, Knight) {
        var config = {
            knightCount: 10,
            strategy: null
        };

        return {
            start: function () {
                $log.info("starting the simulation...");

                // create knights
                for (var i = 0; i < config.knightCount; i++) {
                    this.knights.push(new Knight(100, 10));
                }
            },
            config: function (newConfig) {
               angular.extend(config, newConfig);
            },
            getConfig: function () {
                return config;
            },
            knights: []
    }
    });