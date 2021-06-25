const expect = require('chai').expect;
const calcualtor = require('../../app/calculator');

describe('test calculate function', function () {
    const calculator = new calcualtor();

    describe('positive tests', function () {
        it('should check ADD', function () {
            const sum = calculator.add(5,5,5,5);
            expect(sum).to.equal(20);
        });

        it('should check multiply', function () {
            const times = calculator.multiply(5,5,5,5);
            expect(times).to.equal(625);
        });
    });

    describe('negative tests', function () {
        it('space instead of value, using add function', function () {
            const space = calculator.add(   );
            expect(space).to.equal(0);
        });

        it('text instead of value, using add function ', function () {
            expect(() => calculator.add("a", "b")).to.throw(`Negative number!`);
        });

        it('text instead of value, using multiply function ', function () {
            expect(() => calculator.multiply("a", "b")).to.throw(`Negative number!`);
        });

        it('space instead of value, using multiply function', function () {
            const space = calculator.multiply(   );
            expect(space).to.equal(0);
        });
    });
});
