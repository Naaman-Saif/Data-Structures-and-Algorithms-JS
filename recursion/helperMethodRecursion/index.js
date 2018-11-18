//Helper Function
/*
    outer = (input) =>{
        var outerScopedVariable = []

        function helper(helperInput){
            //modify the outerScopedVariable

            helper(helperInput)
        }
        //You also got to invoke it silly
        helper(input)

        return outerScopedVariable;
    } 

*/

collectOddValues = arr => {
  let result = [];
  helper = helperInput => {
    if (!helperInput.length) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };
  helper(arr);

  return result;
};

console.log(collectOddValues([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));