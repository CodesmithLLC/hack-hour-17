// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	let noPunctuation = str.replace(/[^a-z0-9]/gmi, " ").toLowerCase();
	let strArr = noPunctuation.split(' ');
	let wordStack = [];
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] === '') {
			// do nothing
		} else if (strArr[i].split('').reverse().join('') === wordStack[wordStack.length - 1]) {
			wordStack.pop();
		} else {
			wordStack.push(strArr[i]);
		}
	}
	return wordStack.length === 0;
}

module.exports = matchWord;
