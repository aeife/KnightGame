/**
 * Created by aeife on 23/02/14.
 */
var app = angular.module('app', [
    'knightGame',
    'ngRoute'
  ]);
app.config([
  '$routeProvider',
  function ($routeProvider) {
  }
]);
app.controller('AppCtrl', [
  '$scope',
  'knightGame',
  function ($scope, knightGame) {
    $scope.msg = 'Hello, World!';
    $scope.knightGame = knightGame;
    knightGame.config({ knightCount: 10 });
    $scope.degs = [];
    for (var i = 0; i < knightGame.getConfig().knightCount; i++) {
      $scope.degs.push(360 / knightGame.getConfig().knightCount * i + 270);
    }
    console.log($scope.degs);
    knightGame.start();
  }
]);/**
 * Created by aeife on 23/02/14.
 */
angular.module('knightGame.knight', []).factory('Knight', function () {
  function Knight(health, damage) {
    this.health = health;
    this.attackValue = damage;
    this.armorValue = 0;
    this.dead = false;
  }
  Knight.prototype.getHealth = function () {
    return this.health;
  };
  Knight.prototype.getAttackValue = function () {
    return this.attackValue;
  };
  Knight.prototype.takeDamage = function (damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
      this.dead = true;
    }
  };
  Knight.prototype.attack = function (enemy) {
    enemy.takeDamage(this.attackValue);
  };
  return Knight;
}).directive('knight', function () {
  return {
    templateUrl: 'src/knightGame/knight.html',
    restrict: 'E',
    scope: {
      obj: '=',
      status: '='
    },
    controller: [
      '$scope',
      function ($scope) {
        $scope.getImgColor = function () {
          if ($scope.status.current) {
            return 'green';
          } else if ($scope.status.next) {
            return 'red';
          } else {
            return 'black';
          }
        };
      }
    ]
  };
});/**
 * Created by aeife on 23/02/14.
 */
angular.module('knightGame', ['knightGame.strategy.linearStrategy']).factory('knightGame', [
  '$log',
  'Knight',
  'linearStrategy',
  function ($log, Knight, linearStrategy) {
    var config = {
        knightCount: 10,
        strategy: linearStrategy
      };
    return {
      start: function () {
        var s = config.strategy;
        $log.info('starting the simulation...');
        s.init(config.knightCount);
        this.knights = s.knights;  // create knights
                                   //for (var i = 0; i < config.knightCount; i++) {
                                   //  this.knights.push(new Knight(100, 10));
                                   //}
                                   //                while (!s.finished) {
                                   //                    this.makeTurn();
                                   //                }
      },
      config: function (newConfig) {
        angular.extend(config, newConfig);
      },
      getConfig: function () {
        return config;
      },
      knights: [],
      makeTurn: function () {
        config.strategy.current.attack(config.strategy.next);
        config.strategy.turn();
      },
      getKnightStatus: function (knight) {
        if (knight === config.strategy.current) {
          return 'current';
        }
      }
    };
  }
]);/**
 * Created by aeife on 23/02/14.
 */
angular.module('knightGame.strategy.linearStrategy', ['knightGame.knight']).factory('linearStrategy', [
  'Knight',
  function (Knight) {
    return {
      init: function (knightCount) {
        for (var i = 0; i < knightCount; i++) {
          this.knights.push(new Knight(100, 60));
        }
        this.current = this.knights[0];
        this.next = this.knights[1];
      },
      knights: [],
      turn: function () {
        this.current = this.findNext(this.current);
        this.next = this.findNext(this.current);
        // check end of game
        if (this.current === this.next) {
          this.finished = true;
        }
      },
      findNext: function (knight) {
        do {
          knight = this.knights[(this.knights.indexOf(knight) + 1) % this.knights.length];
        } while (knight.dead);
        return knight;
      },
      current: null,
      next: null,
      finished: false
    };
  }
]);