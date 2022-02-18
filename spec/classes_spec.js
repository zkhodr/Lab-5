import { ExampleClass } from '../classes.js'

describe("A suite of tests for classes.js", function () {
    it('tests for a class with a handleInput method that accepts a string argument and returns a string argument passed to the constructor', function () {
        let sPhoneNumber = "123-456-7890";
        let oExample = new ExampleClass(sPhoneNumber);
        expect(oExample.handleInput("You called from")).toMatch(sPhoneNumber);
    });
});
