class Calculator {
    constructor(...values) {
        this.values = values;
    };

    add() {
        let sum = 0;

        for (let i of this.values) {
            if (typeof i === 'number') {
                sum = sum + i
            } else {
                throw new Error(`Negative number!`);
            }
        }
        return sum
    };

    multiply () {
        if((this.values).length === 0) return 0
        let res = 1
        for (let i of this.values) {
            if (typeof i === 'number') {
                res = res * i
            } else {
                throw new Error(`Negative number!`);
            }
        }
        return res
    }
}

module.exports = Calculator
// let calculator = new Calculator(5,"z",5,5)
// let add = calculator.add()
// let multiply = calculator.multiply()
// console.log(add)
// console.log(multiply)