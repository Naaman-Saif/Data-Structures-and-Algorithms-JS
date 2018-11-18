factorial = num => {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};
console.log(factorial(4));
//Works fine I suppose? :P
