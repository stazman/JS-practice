
function rangeOfNumbers(startNum, endNum) {
  if (startNum < endNum){
    return []

  } else {

    let fin = rangeOfNumbers(startNum+1, endNum-1)
    fin.push(startNum, endNum)
    return fin
  }
};

rangeOfNumbers(2,6);

// function countDown(n){
//   return n<1 ? []
//     : n===1 ? [1]
//     : [n].concat(countDown(n-1))
// }

// console.log(countDown(5))


// function convertToInteger(str) {
// 	return parseInt(str,2)
// }

// convertToInteger("10011");


// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n-1) + arr[n-1];
//   }
// }

// sum([1, 2, 3], 3);
// function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
// the value of n is being changed with each call and arr stays the same
//     }
//   }
