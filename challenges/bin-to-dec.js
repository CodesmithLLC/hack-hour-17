/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    // Iterative solution
    // let dec = 0;
    //binArr = binary.split('').reverse();
    // for(let i = 0; i < binArr.length; i++) {
    //     if(binArr[i] === '1') {dec += Math.pow(2,i);}
    // }
    // return dec;

    // Functional solution
    binArr = binary.split('').reverse();
    
    //check if valid binary string
    if(binArr.length === 0)
        return -1;
    if(!binArr.every(val => val === '1' || val === '0'))
        return -1;

    return binArr.reduce(function(acc, val, index){
        return (val === '1') ? (acc + Math.pow(2,index)) : acc;
    }, 0);
   
}

module.exports = binToDec;
