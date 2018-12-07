swap = (arr, idx1, idx2) => {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};

bubbleSort = arr => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
};

optimizedBubbleSort = arr => {
	var noSwaps;
	for (let i = 0; i < arr.length - 1; i++) {
		noSwaps = true;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
};
console.log(bubbleSort([1, 4, 90, 88, 64, 6, 3, 8, 2]));
console.log(optimizedBubbleSort([1, 8, 2, 3, 4, 5]));
