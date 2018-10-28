module.exports = function make(...argums) {
	const numb = argums.reduce((a, b) => a + b);
	if (typeof (numb) === 'number') {
		return make.bind(this, numb);
	} else {
		return argums[0];
	}
}