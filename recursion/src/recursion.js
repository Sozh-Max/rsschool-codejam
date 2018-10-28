module.exports = function recursion (node, count, arrayNew) {
	if (!arrayNew) {
		arrayNew = [];
	}
	if (!count) {
		count = 0;
	}
	if (!node) {
		return arrayNew;
	}
	if (!arrayNew[count]) {
		arrayNew.push([]);
	}
	arrayNew[count].push(node.value);
	recursion(node.left, count + 1, arrayNew);
	return recursion(node.right, count + 1, arrayNew);
}