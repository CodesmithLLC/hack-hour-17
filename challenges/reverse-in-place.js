'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    if (!Array.isArray(array)) return;
    let temp;
    let length = array.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        temp = array[length - i - 1];
        array[length - i - 1] = array[i];
        array[i] = temp;
    }
    return array;
}

module.exports = reverseInPlace;