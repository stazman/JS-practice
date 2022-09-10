

//Returns object with numbers of each non space char in a string

function charObj(str){
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    let noSpace = /\s/g;
    if(!char.match(noSpace)){if (obj[char] > 0) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }}
  }
  return obj;
}

console.log(charObj("crazy train"));

console.log(charObj(""));