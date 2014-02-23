/**
 * Created by aeife on 23/02/14.
 */

describe("linearStrategy", function () {

    var linearStrategy;

    beforeEach(module('knightGame.strategy.linearStrategy'));
    beforeEach(inject(function (_linearStrategy_) {
        linearStrategy = _linearStrategy_;
    }));

    it("should init correct amount of knights", function () {
        linearStrategy.init(5);

        expect(linearStrategy.knights.length).toBe(5);
    });

    it("should start with first knight as current", function () {
        linearStrategy.init(5);
        expect(linearStrategy.current).toBe(linearStrategy.knights[0]);
    })

    it("should start with second knight as next", function () {
        linearStrategy.init(5);
        expect(linearStrategy.next).toBe(linearStrategy.knights[1]);
    });

    it("should select next knight on turn", function () {
        linearStrategy.init(3);

        expect(linearStrategy.current).toBe(linearStrategy.knights[0]);
        linearStrategy.turn();
        expect(linearStrategy.current).toBe(linearStrategy.knights[1]);
        linearStrategy.turn();
        expect(linearStrategy.current).toBe(linearStrategy.knights[2]);
        linearStrategy.turn();
        expect(linearStrategy.current).toBe(linearStrategy.knights[0]);
    });

    it("should select correct next knights when knight died", function () {
        linearStrategy.init(3);

        expect(linearStrategy.current).toBe(linearStrategy.knights[0]);
        linearStrategy.knights[1].dead = true;
        linearStrategy.turn();
        expect(linearStrategy.current).toBe(linearStrategy.knights[2]);
        expect(linearStrategy.next).toBe(linearStrategy.knights[0]);
    });

    it("next and current should be equal when last man standing", function () {
        linearStrategy.init(3);

        expect(linearStrategy.current).toBe(linearStrategy.knights[0]);
        linearStrategy.knights[1].dead = true;
        linearStrategy.turn();
        linearStrategy.knights[0].dead = true;
        linearStrategy.turn();
        expect(linearStrategy.current === linearStrategy.next).toBe(true);

    });

});