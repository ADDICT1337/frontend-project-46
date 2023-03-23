import { test, expect } from '@jest/globals';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import resultStylish from '../__fixtures__/resultStylish';
import resultPlain from '../__fixtures__/resultPlain';

const resultJson = JSON.stringify(JSON.parse(fs.readFileSync('__fixtures__/resultJson.json', 'utf8')));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

test('test1 - fileJsonStylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(resultStylish);
});
test('test2 - fileYmlStylish', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(resultStylish);
});
test('test3 - fileYmlPlain', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toEqual(resultPlain);
});
test('test4 - fileJsonStylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(resultPlain);
});
test('test5 - fileJson', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toEqual(resultJson);
});
