class Calculator {
    add(...values) {
        let sum = 0;
        this.values = values
        for (let i of this.values) {
            if (typeof i === 'number') {
                sum = sum + i
            } else {
                throw new Error(`Negative number!`);
            }
        }
        return sum
    };

    multiply (...values) {
        this.values = values
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
