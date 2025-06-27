'use strict';

const MAX_ALLOWED = 999;
/**
 * @param inputStr takes the input string which can have  special characters, numbers etc
 * */
const add = (inputStr) => {
    const digitArr = getOnlyDigits(inputStr);
    const negativeItems = digitArr.filter(digit => +digit < 0);
    if(negativeItems.length){
        return `negatives not allowed - ${negativeItems.toString()}`
    }
    return digitArr.reduce((acc, curVal) => {
        return acc + (+curVal > MAX_ALLOWED ? 0 : +curVal);
    }, 0);
}
/**
 * @param numberStr which is again a string which can have numbers, special characters
 * */
const getOnlyDigits = (numberStr) => {
    /* this regex will match and return only numbers and in
     case no numbers is present it will be empty array */
    return numberStr.match(/-?\d+/g) || [];
}
module.exports = {
    add,
}