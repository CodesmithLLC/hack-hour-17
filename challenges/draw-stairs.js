/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/


function drawStairs(n) {
    let asterisks = '*';
    let spaces = ' ';
    let str = '';

    for (let i = 1; i <= n; i++) {
        str += spaces.repeat(n-i) + asterisks.repeat(i);
        if (i !== n) str += '\n';
    }
    console.log(str);
}


module.exports = drawStairs;
