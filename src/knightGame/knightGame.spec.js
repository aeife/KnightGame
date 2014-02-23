/**
 * Created by aeife on 23/02/14.
 */

describe("knightGame", function () {
    var knightGame;

    beforeEach(module('knightGame'));
    beforeEach(inject( function (_knightGame_) {
        knightGame = _knightGame_;
    }));

    it("should have a start function", function () {
        expect(knightGame.start).toBeDefined();
    });

    it("should allow change of configs", function () {
        knightGame.config({
            knightCount: 99
        });

        expect(knightGame.getConfig().knightCount).toBe(99);
    });

    it("should init right amount of knights", function () {
        knightGame.config({
           knightCount: 5
        });

        knightGame.start();

        expect(knightGame.knights.length).toBe(5);
    });
});