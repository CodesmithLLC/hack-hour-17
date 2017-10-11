/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time and O(n) space
 *
 */

function mergeArrays(arr1, arr2) {
  const mergedArr = [];
  const longArr = arr1.length > arr2.length ? arr1 : arr2;
  for (let i = 0; i < longArr.length; i += 1) {
    if (!arr1[i]) {
      mergedArr.push(arr2[i]);
    } else if (!arr2[i]) {
      mergedArr.push(arr1[i]);
    } else if (arr1[i] > arr2[i]) {
      mergedArr.push(arr2[i]);
      mergedArr.push(arr1[i]);
    } else {
      mergedArr.push(arr1[i]);
      mergedArr.push(arr2[i]);
    }
  }
  return mergedArr;
}

module.exports = mergeArrays;
