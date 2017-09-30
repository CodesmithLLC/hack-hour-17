/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (isSubstring(s1, s2)) return true;
    for (let i = 0; i < s1.length - 1; i++) {
        s1 = s1.slice(-1) + s1.slice(0, s1.length - 1);
        if (s1 === s2) return true;
    }
    return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};