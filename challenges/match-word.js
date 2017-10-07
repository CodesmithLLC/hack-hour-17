<<<<<<< HEAD
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards.
// for this problem we'll check that all words in a string are "closed". 
//Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.
=======
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.
>>>>>>> a6fd96a854362e28eef0afab26407e7ca785fd1d

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

<<<<<<< HEAD
const matchWord = str => {
    if (typeof str !== 'string') return;
    if (str === '') return true;
    
    const words = str
      .split(/[^a-zA-Z]/)
      .filter(elem => elem !== '')
      .map(word => word.toLowerCase())
      
    const wordStack = [];
    
    // For each word, compare reverse of the word with top of wordStack
      // if equal -> pop the wordStack
      // if not -> push the word to the stack
    words.forEach(word => {
      const reversedWord = word.split('').reverse().join('');
      const topOfStack = wordStack[wordStack.length - 1];
      if (reversedWord === topOfStack) wordStack.pop();
      else wordStack.push(word);
    })
    
    return wordStack.length === 0;
  }
  
=======
function matchWord(str) {

}
>>>>>>> a6fd96a854362e28eef0afab26407e7ca785fd1d

module.exports = matchWord;
