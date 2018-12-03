stringSearch = (longerString, shorterString) => {
	var count = 0;
	for (var i = 0; i < longerString.length; i++) {
		for (var j = 0; j < shorterString.length; j++) {
			if (shorterString[j] !== longerString[i + j]) break;

			if (j === shorterString.length - 1) {
				count++;
			}
		}
	}
	return count;
};

console.log(stringSearch('Saif', 'af'));
