// test.js
const assert = require('assert');
const calculator = require('../src/index');

describe('Calculator', function ()
{
    it('should add two numbers correctly', function ()
    {
        assert.strictEqual(calculator.add(1, 2), 3);
    });

    it('should subtract two numbers correctly', function ()
    {
        assert.strictEqual(calculator.subtract(5, 3), 2);
    });

    it('should multiply two numbers correctly', function ()
    {
        assert.strictEqual(calculator.multiply(4, 2), 8);
    });

    it('should divide two numbers correctly', function ()
    {
        assert.strictEqual(calculator.divide(6, 2), 3);
    });

    it('should throw an error when dividing by zero', function ()
    {
        assert.throws(() => calculator.divide(6, 0), /Cannot divide by zero/);
    });
});
