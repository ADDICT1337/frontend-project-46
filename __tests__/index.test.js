import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';
import result1 from '../__fixtures__/resultStylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const cases = [
  // ['file1.json', 'file2.json', 'resultJson.txt', 'json'],
  ['file1.yml', 'file2.yml', 'resultStylish.js', 'stylish'],
  ['file1.json', 'file2.json', 'resultStylish.js', 'stylish'],
  // ['file1.json', 'file2.json', 'resultPlain.txt', 'plain'],
];

test.each(cases)('Compare %s and %s to expect %s in "%s" style', (firstArg, secondArg, expectedResult, format) => {
  const firstFile = getFixturePath(firstArg);
  const secondFile = getFixturePath(secondArg);
  // const getResult = readFile(expectedResult);
  const result = genDiff(firstFile, secondFile, format);
  expect(result1).toEqual(result);
});
