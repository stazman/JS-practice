


//remember, slice doesn't mutate the string, which is not possible, but it does return copies that are stored as changed within the series of recursive calls. remember, slice() returns what's left in a shallow copy, not what's removed.

//used from https://stackoverflow.com/questions/51567811/recursive-palindrome-check-with-javascript

function checkPalindrome(str){

  if (str.length===1) return true;
  if (str.length===2) return str[0]===str[1];
  if (str[0]===str.slice(-1)) return checkPalindrome(str.slice(1,-1));
  return false;
}

console.log(checkPalindrome('hat'))



  //for fib():
  //if popped off string from first call matches popped off string from second call will result in a boolean

  //compare the current first index with current last index
  //if what's popped off matches what's popped off


// function fib(n){


//   if (n===2){
//     return [0,1];
//   } else if (n===1){
//     return [0];
//   } else if (n<=0){
//     return 0;
//   }

//   let recurFib = fib(n-1);

//   recurFib.push(recurFib[recurFib.length-2] + recurFib[recurFib.length-1]);

//   return recurFib;
// }

// fib(4)




// function evenOrNot(n){

//   if (){

//   } else {

//   }

// }




// function expo (base, exp){

// //base case --

// if(exp<1){
//   return 1;
// }
// let recurNum = expo(base, exp-1);

// return recurNum * base;


//base * base each time exp is reduced by one

//result is called power technically

//base times itself exp number of times

// }

// console.log(expo(8,4))


// https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-4.php

// function addNums(arr){
//   if(arr.length===1){
//     return arr[0]
//   } else {
//     return arr.pop() + addNums(arr)
//   }
// }

// console.log(addNums([4,8,22,10,6]))

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

// 4. Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
// Click me to see the solution.


// const arr = new Array(1, 2, 3, 4, 5, 6)


// function sum(arr, i){

//   // let l = arr
//   // n = l.length

//   arr.pop()

//   if(arr.length === 0){
//     return [] ;
//   }

//   let sumRecur = sum(arr, i-1)
//   sumRecur.push(arr[i-1])



// }

// sum([1, 2, 3, 4, 5, 6], 6)