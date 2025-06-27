'use strict';

/**
 * @param inputStr takes the input string which can have  special characters, numbers etc
 * */
const add = (inputStr) => {
    const digitArr = getOnlyDigits(inputStr);
    console.log('digitArr', digitArr);
    const hasNegative = digitArr.find(digit => +digit < 0);
    if(hasNegative){
        return `negatives not allowed - ${inputStr.toString()}`
    }
    return digitArr.reduce((acc, curVal) => {
        return acc + (+curVal >= 1000 ? 0 : +curVal);
    }, 0);
}
/**
 * @param numberStr which is again a string which can have numbers, special characters
 * */
const getOnlyDigits = (numberStr) => {
    return numberStr.match(/-?\d+/g) || [];
}
module.exports = {
    add,
}