const assert = require('assert');
const make = require('./src/make.js');


it('TEST make ():  test with function sum ()', () => {
	function sum(a, b) {
		return a + b;
	}
  assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  assert.equal(make(4, 34, 2)(5)(sum), 45);
  assert.equal(make(15)(34, 21, 666)(41)(15)(34, 21, 666)(41)(sum), 1554);
  assert.equal(make(15)(34)(41, 44)(sum), 134);
});
