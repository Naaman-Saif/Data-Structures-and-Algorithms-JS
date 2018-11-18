//Just to understand the logic
power = (base, exponent) => {
  var result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 3));

//Recursive Power Function
rPower = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * rPower(base, exponent - 1);
};

console.log(rPower(2, 3));
