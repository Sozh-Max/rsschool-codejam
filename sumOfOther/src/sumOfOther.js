module.exports = function sumOfOther (array) {
	const sumElemsArray = array.reduce((sum,current) => sum + current);
	return array.map(elem => sumElemsArray - elem);
}