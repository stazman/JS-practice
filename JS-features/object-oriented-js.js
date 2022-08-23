// Creating objects with constructors

function Pet(name, species, gender, age){
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.age = age;
}

const cash = new Pet("Cash", "dog", "male", 2);

console.log(cash.name);
console.log(cash.species);
console.log(cash.gender);
console.log(cash.age);


// Just logging the parameter variables is enough to initialize them:

function Pet(name, species, gender, age){
  console.log(name);
  console.log(species);
  console.log(gender);
  console.log(age);
}

cash = new Pet("Cash", "dog", "male", 2);


// But the following will return undefined (because the object's properties were not defined):

console.log(cash.name);


// Returns two empty objects ... one from logging this and one from returning the newly created object

function Pet(name, species, gender, age){
  console.log(this);
}

cash = new Pet("Cash", "dog", "male", 2);




// Object methods









// Prototypes








// Classes








// Bind call apply









// Object relations









// Class relations