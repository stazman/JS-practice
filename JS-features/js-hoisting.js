function hoist(){
  console.log(x);
  let x = 9;
}

hoist()

// This results in error because of hoisting:
// Uncaught ReferenceError: Cannot access 'x' before initialization