import { eliminator } from './eliminator';
import { readLexiconIntoArray } from './reader';

/**
 * @typedef CharProp
 * @property {('a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z')} char
 * @property {Boolean} isEliminated
 * @property {Boolean} isInWord
 * @property {Array<Number>} positions
 */

/**
 * @function
 * @throws
 * @param {Array<CharProp>} chars
 * @param {Number} numGuessesRemaining
 * @returns {Array<import('./eliminator').ElimAnalysis>}
 */
function solver(chars, numGuessesRemaining) {
  /*
    1. filter the answers dictionary down to possible answers given the remaining available characters
    2. find the legal guess that potentially eliminates the most characters
  */

  if (numGuessesRemaining == 1) {
    // write some clever logic to pick a reasonable guess
  }

  const eliminatedChars = chars.filter(char => {
    return char.isEliminated;
  });
  
  if (eliminatedChars.length == 0) {
    // default to 'slate' as the initial guess
    return [{
      word: 'slate',
      numNewChars: 5
    }];
  }

  const answers = readLexiconIntoArray('answers');

  const possibleAnswers = answers.filter(word => {
    const letters = word.split('');

    for (let l of letters) {
      const char = eliminatedChars.find(ec => ec.char == l);

      if (char != undefined) return false;
    }

    return true;
  });

  return eliminator(chars);
}

export default solver;