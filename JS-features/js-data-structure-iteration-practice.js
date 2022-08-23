const friends = [
  { id: 1,
    name: "Danyel",
    country: "Brazil"
  },
  { id: 2,
    name: "Dana",
    country: "USA"
  }
]

const danyel = {
  id: 1,
  name: "Danyel",
  country: "Brazil"
}

const dana = {
  id: 2,
  name: "Dana",
  country: "USA"
}

const dana2 = {
  id: 3,
  occupation: "vocalist",
  country: "USA"
}

const arr1 = [ "a", "b", "c", "d"];

const arr2 = [ "Cash", "Carter", "Joshua", "Squirt" ];

const arr1Shift = arr1.shift();

arr1Shift;

arr1;

const arr1Unshift = arr1.unshift("a");

arr1Unshift;

arr1;

const arr1Push = arr1.push("e");

arr1;

const arr1Pop = arr1.pop();

arr1;

const newObj = Object.assign(friends, [{ id: 3, name: "Joe", age: 36 }])

newObj;

const newObj2 = Object.assign({}, dana);

newObj2;

const newObj3 = Object.assign(dana, dana2);

newObj3;

// const newObj2 = Object.assign({}, friends[0], friends[1]);

const danaKeys = Object.keys(newObj3);

console.log(danaKeys);

dana.id;

dana.id = 4;


const objProps = Object.getOwnPropertyNames(newObj3);

console.log(objProps);

objProps === danaKeys;

const dana3 = {[Symbol("Religion")]:"Jehovah's Witness"};

const objWithSymbol = Object.assign({}, dana, dana2, dana3 );



objWithSymbol;

Object.getOwnPropertyNames(objWithSymbol);

Object.getOwnPropertySymbols(objWithSymbol);

console.log(objWithSymbol.hasOwnProperty("name"));


function addThree (arr){

  let counter = 0;

  arr.forEach(function(el){

   counter += 3;

  })

  return counter;

}


addThree([1,2,3,4,5]);


const arr3 = [1,2,3,4,5];

arr3.filter(function(el){

  return el > 3

})


let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = function (a, b)
{
  return a + b
}

ratings.forEach(function(rating) {
  sum =  sumFunction(sum, rating)
})

console.log(sum)

// Given the array

const letters = ["alpha", "gamma", "delta"];

// which operation(s) return the array ["alpha", "beta", "gamma", "delta"] without mutating (changing) the letters Array?

let alpha = letters.slice(0,1);
let gammaDelta = letters.slice(1,3);

let newLetters = [ ...alpha, "beta", ...gammaDelta ];

newLetters;


const a = "My age is " + 34;

console.log(a);

for (const char of a ){
  console.log(char);
}

console.log(newObj);

for (const key in newObj){
  console.log(newObj[key]);
}

let joe = newObj[0];

console.log(joe);

for (const key in joe){
  console.log(joe[key]);

}

for (const key in joe){
 console.log(key);
}


const address = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: 10004
};

address.key = "Let's have a 'key' key!";

for (const key in address) {
  console.log(address.key);
}

for (const key in address) {
  console.log(address[key]);
}

for (const key in address){
  console.log(key);
}

function deepIterator(obj){
   if (typeof obj === "object"){
    for (const key in obj){
      deepIterator(obj[key]);
    }
  } else {
    console.log(obj);
  }
}

const userInfo = {
  firstName: 'Avi',
  lastName: 'Flombaum',
  company: {
    name: 'Flatbook Labs',
    jobTitle: 'Developer Apprentice'
  },
  friends: [{
    firstName: 'Joe',
    lastName: 'Burgess',
    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Developer Apprentice'
    }
  },
  {
    firstName: 'Gabe',
    lastName: 'Jackson',
    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Lead Developer'
    }
  }],
  projects: [{
    title: 'Flatbook',
    description: 'The premier Flatiron School-based social network in the world.'
  },
  {
    title: 'Scuber',
    description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
  }]
};

deepIterator(userInfo);