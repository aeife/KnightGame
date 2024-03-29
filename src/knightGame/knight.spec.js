/**
 * Created by aeife on 23/02/14.
 */

describe('Knight', function(){
    var Knight;

    beforeEach(module('knightGame.knight'));

    beforeEach(inject(function (_Knight_){
        Knight = _Knight_;
    }));

    it("should create with right properties", function () {
        var knight1 = new Knight(100, 20);
        expect(knight1.health).toBe(100);
        expect(knight1.attackValue).toBe(20);
    });

    it("should have functional getters", function () {
        var knight = new Knight(100, 20);
        expect(knight.getHealth()).toBe(100);
        expect(knight.getAttackValue()).toBe(20);
    });

    it("should allow multiple knights with different attributes", function () {
        var knight1 = new Knight(100, 20);
        var knight2 = new Knight(80, 5);
        expect(knight1.getHealth()).toBe(100);
        expect(knight2.getHealth()).toBe(80);
    });

    it("should adjust health when damage is taken", function () {
        var knight = new Knight(100, 20);
        knight.takeDamage(50);
        expect(knight.getHealth()).toBe(50);
    });

    it("should damage other knight on attack wich attack value", function () {
        var knight1 = new Knight(100, 20);
        var knight2 = new Knight(100, 20);
        knight1.attack(knight2);
        expect(knight2.getHealth()).toBe(80);
    });

    it("shoud be dead when health is below zero", function () {
        var knight = new Knight(100, 20);
        knight.takeDamage(110);
        expect(knight.dead).toBe(true);
    });
});