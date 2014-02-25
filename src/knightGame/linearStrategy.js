/**
 * Created by aeife on 23/02/14.
 */

angular.module('knightGame.strategy.linearStrategy', ['knightGame.knight'])

    .factory('linearStrategy', function (Knight) {
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
                    knight = this.knights[(this.knights.indexOf(knight)+1) % this.knights.length];
                } while (knight.dead);

                return knight;
            },
            current: null,
            next: null,
            finished: false
        }
    });