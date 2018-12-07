swap = (arr, idx1, idx2) => {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
	return arr;
};

selectionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		var min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min != i) {
			swap(arr, i, min);
		}
	}
	return arr;
};
console.log(selectionSort([5, 2, 4, 1, 3]));
