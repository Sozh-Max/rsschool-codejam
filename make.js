function sum(a, b) {
	return a + b;
}

function make(...argums) {
	const numb = argums.reduce(sum);
	if (typeof (numb) === 'number') {
		return make.bind(this, numb);
	} else {
		return argums[0];
	}
}
