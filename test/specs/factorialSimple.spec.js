const expect = require('chai').expect;
const calcualtor = require('../../app/calculator');

describe('test calculate function', function () {
    const calculator = new calcualtor(5,5,5,5)

    describe('positive tests', function () {
        it('should check ADD', function () {
            const sum = calculator.add();
            expect(sum).to.equal(20);
        });

        it('should check multiply', function () {
            const times = calculator.multiply();
            expect(times).to.equal(625);
        });
    });

    describe('negative tests', function () {
        it('space instead of value, using add function', function () {
            const calculator = new calcualtor(   )
            const space = calculator.add();
            expect(space).to.equal(0);
        });

        it('text instead of value, using add function ', function () {
            const calculator = new calcualtor("a", "b")
            expect(() => calculator.add()).to.throw(`Negative number!`);
        });

        it('text instead of value, using multiply function ', function () {
            const calculator = new calcualtor("a", "b")
            expect(() => calculator.multiply()).to.throw(`Negative number!`);
        });

        it('space instead of value, using multiply function', function () {
            const calculator = new calcualtor(   )
            const space = calculator.multiply();
            expect(space).to.equal(0);
        });
        // it('invalid operator', function () {
        //     const operation = calculator.calculate;
        //     expect(() => operation('4', '++', '5')).to.throw('one of the parameters is not correct');
        // });
    });
});
