/**
 * Created by aeife on 23/02/14.
 */

angular.module('knightGame.strategy.linearStrategy', ['knightGame.knight'])

    .factory('linearStrategy', function (Knight) {
        var turnCount = 1;
        return {
            init: function (knightCount) {
                for (var i = 0; i < knightCount; i++) {
                    this.knights.push(new Knight(100, 60));
                }

                this.current = this.knights[0];
                this.next = this.knights[turnCount % this.knights.length];

            },
            knights: [],
            turn: function () {
                turnCount++;

                if (!this.next.dead) {
                    // next knight will be current if not dead
                    this.current = this.next;
                } else {
                    // if knight dead find next knight
                    this.current = this.findNext();
                    turnCount++;
                }

                this.next = this.findNext();

                // check end of game
                console.log(this.current);
                console.log(this.next);
                if (this.current === this.next) {
                    this.finished = true;
                }
            },
            findNext: function () {
                var knight = this.current;
                var currentIndex = turnCount;
                do {
                    knight = this.knights[currentIndex % this.knights.length];
                    currentIndex++;
                } while (knight.dead);

                return knight;
            },
            current: null,
            next: null,
            finished: false
        }
    });