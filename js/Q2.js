// The function, decodeString, gets passed one parameter, s (A String).
// s is an encoded string, and the decodeString function should return the corresponding decoded string.
// For Example: "k[ab]" - the whatever is within the square brackets shall be repeated "k" times.
// k is a positive integer.

let decodeString = s => {
  // Variable to hold how many times we've gone over something that is Not a number or a bracket.
  let letterCount = 0;
  // We can reverse loop
  for (let i = s.length - 1; i > 0; i--) {
    // Check to increment letterCount
    if (s[i] != "]" && s[i] != "[" && typeof s[i] != "number") {
      letterCount++;
    }
    // Look for the first instance of "[".
    if (s[i] == "[") {
      // Make that number a variable that we'll use to determine how many times the inner items get concatenated.
      let k = Number(s[i - 1]);
      // This gives us the index of the first letter within the brackets.
      let n = s.indexOf(s[i + 1]);
      // Make a variable that represents the inner items.
      let alpha = [];
      // Range of items you're currently working with. e.g. where in x[fooy[bar]], we are working with y[bar].
      let rangeFloor = s.indexOf(s[i - 1]);
      let workingRange = letterCount + n;
      let rangeCeiling = workingRange + 1;
      for (let j = n; j < workingRange; j++) {
        alpha.push(s[j]);
      }
      // Turn array of letters into one string.
      let joinedAlphabet = alpha.join("");
      // Repeat the these using "k" (created on line 50 to tell us how many times we'll be repeating this string).
      joinedAlphabet = joinedAlphabet.repeat(k);
      let superr = s.substring(rangeFloor, rangeCeiling);
      // Replace the items we looped through, the brackets they're wrapped in, and the number that indicated how many times to repeat these items, with our joinedAlphabet
      s = s.replace(superr, joinedAlphabet);
      // Reset the for reverse loop
      i = s.length - 1;
      // Reset letter counter
      letterCount = 0;
    } // <~ If statement that is checking for "["
  } // <~ First For loop (The reverse loop)
  return s;
}; // <~ decodeString

decodeString("3[ab]");
decodeString("2[b3[a]]");
