factorial = num => {
  var result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
console.log(factorial(4));

rFactorial = num => {
  if (num == 1) return 1;
  return num + rFactorial(--num);
};
console.log(rFactorial(4));
