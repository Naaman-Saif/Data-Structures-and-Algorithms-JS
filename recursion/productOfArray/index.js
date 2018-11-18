productOfArray = arr => {
  var result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};
console.log(productOfArray([1, 3, 6]));

rProductOfArray = arr => {
  if (!arr.length) return 1;
  return arr[0] * rProductOfArray(arr.slice(1));
};
console.log(rProductOfArray([1, 3, 6]));
