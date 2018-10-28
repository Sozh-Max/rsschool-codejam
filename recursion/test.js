const assert = require('assert');
const recursion = require('./src/recursion.js');


it('TEST recursion (): should return equal result', () => {
	let tree = {
		"value": 100,
		"left": {
			"value": 90,
			"left": { 
				"value": 70 
			},
			"right": {
				"value":99
			}
		}, 
		"right": { 
			"value": 120,
			"left": {
				"value": 110
			}, 
			"right": {
				"value":130
			}
		}
	}
  let array = recursion(tree); //[[100], [90, 120], [70,99,110,130]]
  assert.equal(array[0][0], 100);
  assert.equal(array[1][0], 90);
  assert.equal(array[1][1], 120);
  assert.equal(array[2][0], 70);
  assert.equal(array[2][1], 99);
  assert.equal(array[2][2], 110);
  assert.equal(array[2][3], 130);
});