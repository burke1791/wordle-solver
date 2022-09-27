import { readLexiconIntoArray } from './reader';

/**
 * @typedef ElimAnalysis
 * @property {String} word
 * @property {Number} numNewChars
 */

/**
 * @function
 * Identify which words will eliminate the most available characters, sorted in descending order by the number of characters it will eliminate
 * @param {Array<import("./solver").CharProp>} chars
 * @returns {Array<ElimAnalysis>}
 */
export function eliminator(chars) {
  const legal = readLexiconIntoArray('legal');

  const elimAnalysis = legal.map(word => {
    const analysis = {
      word: word,
      numNewChars: 0
    };

    const letters = word.split('');

    for (let l of letters) {
      const char = chars.find(c => c.char == l);
      if (!char.isEliminated) analysis.numNewChars++;
    }

    return analysis;
  });

  elimAnalysis.sort((a, b) => b.numNewChars - a.numNewChars);

  return elimAnalysis;
}