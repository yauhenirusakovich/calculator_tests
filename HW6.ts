class Calculator {
    num1: number;
    num2: number;
    expectedResult: number;
    failedResult: number;

    constructor(num1: number, num2: number, expectedResult: number, failedResult: number) {
        this.num1 = num1;
        this.num2 = num1;
        this.expectedResult = expectedResult;
        this.failedResult = failedResult;
    };

    operationSum() {
        if (this.num1 + this.num2 === this.expectedResult) {
            return "TEST PASSED"
        } else if (this.num1 + this.num2 === this.failedResult) {
            return "TEST FAILED"
        }
    }

    operationMultiply() {
        if (this.num1 * this.num2 === this.expectedResult) {
            return "TEST PASSED"
        } else if (this.num1 * this.num2 === this.failedResult) {
            return "TEST FAILED"
        }
    }

    operationDividing() {
        if (this.num1 / this.num2 === this.expectedResult) {
            return "TEST PASSED"
        } else if (this.num1 / this.num2 === this.failedResult) {
            return "TEST FAILED"
        }
    }

    operationSubtraction() {
        if (this.num1 - this.num2 === this.expectedResult) {
            return "TEST PASSED"
        } else if (this.num1 - this.num2 === this.failedResult) {
            return "TEST FAILED"
        }
    }
    operationSumMultiply() {
        if ((this.num1 + this.num2) * (this.num1 + this.num2) == this.expectedResult) {
            return "TEST PASSED"
        } else if ((this.num1 + this.num2) * (this.num1 + this.num2) == this.failedResult) {
            return "TEST FAILED"
        }
    }
}
let summaryPositive1 = new Calculator(2, 2, 4, 5);
console.log(`POSITIVE RESULT 1 =====>>>>> ${summaryPositive1.operationSum()}`);

let summaryNegative1 = new Calculator(2, 2, 5, 4);
console.log(`NEGATIVE RESULT 1 =====>>>>> ${summaryNegative1.operationSum()}`);

let multiplyPositive2 = new Calculator(4,4,16,10);
console.log(`POSITIVE RESULT 2 =====>>>>> ${multiplyPositive2.operationMultiply()}`);

let multiplyNegative2 = new Calculator(4,4,7,16);
console.log(`NEGATIVE RESULT 2 =====>>>>> ${multiplyNegative2.operationMultiply()}`);

let dividingPositive3 = new Calculator(10,10,1,3);
console.log(`POSITIVE RESULT 3 =====>>>>> ${dividingPositive3.operationDividing()}`);

let dividingNegative3 = new Calculator(4,4,11,1);
console.log(`NEGATIVE RESULT 3 =====>>>>> ${dividingNegative3.operationDividing()}`);

let subtractionPositive4 = new Calculator(444,444,0,10);
console.log(`POSITIVE RESULT 8 =====>>>>> ${subtractionPositive4.operationSubtraction()}`);

let subtractionNegative4 = new Calculator(4,4,3,0);
console.log(`NEGATIVE RESULT 1 =====>>>>> ${subtractionNegative4.operationSubtraction()}`);

let sumMultiplyPositive5 = new Calculator(2,2,16,80);
console.log(`POSITIVE RESULT 9 =====>>>>> ${sumMultiplyPositive5.operationSumMultiply()}`);

let sumMultiplyNegative5 = new Calculator(2,3,20,16);
console.log(`POSITIVE RESULT 10 =====>>>>> ${sumMultiplyNegative5.operationSumMultiply()}`);