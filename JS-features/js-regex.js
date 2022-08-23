// Challenge: use regex to return different values based on whether the first letter of a passed-in word is a vowel or a consonant

function getLetter(s) {
  let letter;

  const matchVowels = /[a-z]/g // g means global

  const consonants = /[^a-z0-9]/i

  // NOTE: Variable interpolation is possible with regex, but only with the constructor method, not using a literal:

  const vowels = new RegExp(matchVowels, "i"); // i means case insensitive

if (s[0].match(vowels)){
  letter = "vowel";
} else if (s[0].match(consonants)){
  letter = "consonant";
} else if (typeof(s) !== "string"){
  letter = "Incorrect Input"
}

console.log(s[0].match(vowels))
  return letter;
}

// Edge cases:

  //Allow for non-alphabetical characters (will need a try-catch statement because of resulting TypeError from .match() allow evaluation)

  // Edge case solution:




// Boundaries

  //Make it the last letter and not the first, and set a limit of 100 characters

  // Boundary solution:
