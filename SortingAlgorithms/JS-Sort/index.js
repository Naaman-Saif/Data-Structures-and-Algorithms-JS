function comparer(a, b) {
	return a - b;
}

console.log([6, 4, 15, 10].sort(comparer));

compareByLength = (str1, str2) => {
	return str1.length - str2.length;
};

console.log(['Saif', 'Babar', 'Kaif', 'Anss', 'Abdurrehman'].sort(compareByLength));
