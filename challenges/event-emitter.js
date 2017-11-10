'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if (!this.events[funcName]) this.events[funcName] = [];
  this.events[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if (this.events[funcName] ) {
    this.events[funcName].forEach((func) => func(...args));
  }
};

// var instance = new EventEmitter();
// var counter = 0;
// var counter2 = 10;
// instance.on('increment', function(arg1, arg2) {
//   console.log('arg1', arg1);
//   console.log('arg2', arg2);
//   counter++;
// }); // counter should be 0
// instance.on('increment', function() {
//   counter2++;
// });
// console.log("counter", counter);
// console.log("counter2", counter2);
// instance.trigger('increment', 'hello', 'world'); // counter should be 1
// console.log("counter", counter);
// console.log("counter2", counter2);
// instance.trigger('increment'); // counter should be 2
// console.log("counter", counter);
// console.log("counter2", counter2);



module.exports = EventEmitter;
