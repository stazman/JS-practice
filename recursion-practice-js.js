



// https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-4.php

function addNums(arr){
  if(arr.length===1){
    return arr[0]
  } else {
    return arr.pop() + addNums(arr)
  }
}

console.log(addNums([4,8,22,10,6]))

//Explanation:
// Each time function is called ->
    //The number popped off of the array goes on the stack in order of last number in array to the first and in our program, each number is "programmed" to be added to the next number in the stack, resulting in one number in the end, kind of like an invisible counter+=1
// When the base case is reached, when there is only one item in the array, what's output, as part of LIFO, is the last value to be added to the stack to the first, in order and what's been hidden and added up is added to the one remaining number that was in the array. Becuse the return value of the base case is a number, the "hidden" values outputted can legitly be added to the remaining number returned in the base case. You can tell the base case returned first element in the array is added because if you have a different number as what's returned by the base case, it will change the final value returned accordingly
// what I don't understand is how the function knows to add the numbers being added from the stack, from the function calls and being added to the popped off values one by one, to the number value returned from the base case. What's really freaky is what happens when you set a different kind of structure, such as empty array. ???

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum < endNum){
//     return []

//   } else {

//     let fin = rangeOfNumbers(startNum+1, endNum-1)
//     fin.push(startNum, endNum)
//     return fin
//   }
// };

// rangeOfNumbers(2,6);

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
