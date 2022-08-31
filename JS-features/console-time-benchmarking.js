console.time('looper')

let i = 0
while(i < 1000000){i++}

const helperPromise = function () {
  const promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";
    if (x === y) {
      resolve("Strings are same");
    } else {
      reject("Strings are not same");
    }
  });

  return promise;
};

console.timeEnd('looper')


function test(){
  console.log(1+1)
}

test()
console.time('looper')

async function demoPromise() {
  try {
    let message = await helperPromise();
    console.log(message);
  } catch (error) {
    console.log("Error: " + error);
  }
}

demoPromise();

console.time("looper")
console.timeEnd('looper')