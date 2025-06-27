const calc = require('./index');

describe('String Calculator TDD', ()=>{

    test('Input: "" ', ()=>{
        expect(calc.add("")).toBe(0)
    });
    test('Input: "1" ', ()=>{
        expect(calc.add("1")).toBe(1)
    })
    test('Input: "1,5" ', ()=>{
        expect(calc.add("1,5")).toBe(6)

    })
    test('Input: "1\n2,3" ', ()=>{
        expect(calc.add("1\n2,3")).toBe(6)

    })
    test('Input: "//;\n1;2" ', ()=>{
        expect(calc.add("//;\n1;2")).toBe(3)

    })
    test('Input: "1\n-2,-3" ', ()=>{
        expect(calc.add("1\n-2,-3")).toBe("negatives not allowed - 1\n-2,-3")

    })
    test('Input: "2,1001,4" ', ()=>{
        expect(calc.add("2,1001,4")).toBe(6)

    })
})