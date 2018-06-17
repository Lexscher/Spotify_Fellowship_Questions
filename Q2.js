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
decodeString("3[ab]");
// this doesn't.
decodeString("2[b3[a]]");
