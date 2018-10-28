const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');

it('(1) TEST sumOfOther (): should return equal result', () => {
  let input_arr = [2, 3, 4, 1];
  let result_arr = sumOfOther(input_arr);
  assert.equal(result_arr[0], 8);
  assert.equal(result_arr[1], 7);
  assert.equal(result_arr[2], 6);
  assert.equal(result_arr[3], 9);
});

it('(2) TEST sumOfOther (): should return equal result', () => {
  let input_arr = [5, 3, 2, 5, 4];
  let result_arr = sumOfOther(input_arr);
  assert.equal(result_arr[0], 14);
  assert.equal(result_arr[1], 16);
  assert.equal(result_arr[2], 17);
  assert.equal(result_arr[3], 14);
  assert.equal(result_arr[4], 15);
});