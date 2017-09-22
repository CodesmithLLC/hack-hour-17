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
	// special case
	if (array.length <= 0) return;
	if (array.length == 2){
		let temp = array[0];
		array[0] = array[1];
		array[1] = temp;
	}

	// general case
	let start = 0;
	let end = array.length - 1;
	while (start <= array.length / 2 ) {
		let temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++;
		end--;
	}
}

module.exports = reverseInPlace;
