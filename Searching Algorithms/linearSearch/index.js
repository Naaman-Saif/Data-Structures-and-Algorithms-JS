linearSearch = (arr, value) => {
	for (let i in arr) {
		if (arr[i] === value) return i;
	}
	return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 3));

//Big O of Linear Search is O(n) as n(Items in array) grows so does the time it takes to perform the function
