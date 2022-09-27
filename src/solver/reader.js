import fs from 'fs';
import path from 'path';

/**
 * @function
 * @param {('answers'|'legal')} filename 
 * @returns {Array<String>}
 */
export function readLexiconIntoArray(filename) {
  const filePath = path.resolve(__dirname, 'lexicon', `${filename}.txt`);
  const fileData = fs.readFileSync(filePath).toString().split('\n');
  return fileData;
}