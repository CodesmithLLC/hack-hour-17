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

// input: Number size
// output: string of *
function drawStairs(n) {
  let symbol = '';

  for (let i = 0, j = n; i < n; i++) {
    symbol += ' '.padStart(j) + '*'.repeat(i) + '\n';
    // symbol += '*'.padStart(i);
    j -= 1;
  }

  return symbol;
}

// console.log(drawStairs(6));
module.exports = drawStairs;
