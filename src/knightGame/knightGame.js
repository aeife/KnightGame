/**
 * Created by aeife on 23/02/14.
 */

angular.module('knightGame', ['knightGame.strategy.linearStrategy'])

    .factory('knightGame', function($log, Knight, linearStrategy) {
        var config = {
            knightCount: 10,
            strategy: linearStrategy
        };

        return {
            start: function () {
                var s = config.strategy;
                $log.info("starting the simulation...");

                s.init(config.knightCount);
                this.knights = s.knights;
                // create knights
                //for (var i = 0; i < config.knightCount; i++) {
                  //  this.knights.push(new Knight(100, 10));
                //}

                while (!s.finished) {
                    s.current.attack(s.next);

                    s.turn();
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