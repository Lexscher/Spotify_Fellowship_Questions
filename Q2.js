// The function, decodeString, gets passed one parameter, s (A String).
// s is an encoded string, and the decodeString function should return the corresponding decoded string.
// For Example: "k[ab]" - the whatever is within the square brackets shall be repeated "k" times.
// k is a positive integer.

let decodeString = function(s) {
  // split the sting when you see the openning bracket
  let newThang = s.split("[");
  // This would be the item that was before the bracket("k").
  let c = Number(s[0]);
  console.log(c);
  // This would be the items that we want to repeat ("ab").
  let d = newThang[1].slice(0, 2);
  // Empty string that we can concatenate with our encoded string.
  let e = "";
  // We loop "k" times, and within this for loop,
  for (let i = 0; i < c; i++) {
    console.log(e);
    // we'll concatenate our string.
    e += d;
    console.log(e);
  }
  return e;
};

// this works.
// decodeString("3[ab]");
// this doesn't.
// decodeString("2[b3[a]]");

// I'm going to test everything out here, first.

let test = s => {
  // Variable to hold how many times we've gone over something that is Not a number or a bracket.
  let letterCount = 0;
  // We can reverse loop
  for (let i = s.length - 1; i > 0; i--) {
    console.log(s[i]);
    // Check to increment letterCount
    if (s[i] != "]" && s[i] != "[" && typeof s[i] != "number") {
      console.log("Letter Count:" + letterCount);
      letterCount++;
      console.log("Letter Count:" + letterCount);
      console.log("Index: " + s.indexOf(s[i]) + " Character: " + s[i]);
      console.log("!~MARK~!");
    }
    console.log(s[i - 1]);
    console.log(letterCount);
    // Look for the first instance of "[".
    if (s[i] == "[") {
      // Make that number a variable that we'll use to determine how many times the inner items get concatenated.
      let k = Number(s[i - 1]);
      // This gives us the index of the first letter within the brackets.
      let n = s.indexOf(s[i + 1]);
      console.log("------");
      console.log(k);
      console.log(n);
      console.log(letterCount);
      console.log("------");
      // Make a variable that represents the inner items.
      let alpha = [];
      // Range of items you're currently working with. e.g. where in x[fooy[bar]], we are working with y[bar].
      let rangeFloor = s.indexOf(s[i - 1]);
      let workingRange = letterCount + n;
      let rangeCeiling = workingRange + 1;
      console.log("Range Ceiling: " + rangeCeiling);
      for (let j = n; j < workingRange; j++) {
        console.log("hello");
        console.log(s[j]);
        alpha.push(s[j]);
      }
      console.log(alpha);
      // Turn array of letters into one string.
      let joinedAlphabet = alpha.join("");
      console.log(joinedAlphabet);
      // Repeat the these using "k" (created on line 50 to tell us how many times we'll be repeating this string).
      joinedAlphabet = joinedAlphabet.repeat(k);
      // Big mess of console logs to see what the heck is going on, here!
      console.log(joinedAlphabet);
      console.log(s);
      console.log(s.substr(0, 3) + "  -");
      console.log(rangeFloor);
      console.log(workingRange);
      console.log(rangeCeiling);
      let superr = s.substring(rangeFloor, rangeCeiling);
      console.log("Super: " + superr);
      // Replace the items we looped through, the brackets they're wrapped in, and the number that indicated how many times to repeat these items, with our joinedAlphabet
      console.log("floor: " + rangeFloor);
      console.log("ceiling: " + workingRange);
      console.log(superr.valueOf());
      s = s.replace(superr, joinedAlphabet);
      console.log(s);
      // Reset the for reverse loop
      i = s.length - 1;
      // Reset letter counter
      letterCount = 0;
    } // <~ If statement that is checking for "["
    // We'll do something here like concatenation or remaking the very array we're looping through
  } // <~ First For loop (The reverse loop)
  console.log(s);
  console.log("WE DID IT!");
  return s;
}; // <~ test

// Holy Cow, it Works!!
test("3[ab]");
test("2[b3[a]]");
