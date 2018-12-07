const merge = require('./MergeSortedArrays');

mergeSort = arr => {
	if (arr.length <= 1) return arr;

	var midPoint = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, midPoint));
	let right = mergeSort(arr.slice(midPoint));
	return merge(left, right);
};

console.log(mergeSort([1, 5, 6, 2, 8, 9, 25, 64, 20, 15]));
