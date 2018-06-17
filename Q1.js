// QUESTION 1: SORT BY STRING

// The function, sortByString, takes two parameters, s (A string) and t (A string).
// We'll have to sort the string, s, by the order of appearence in string, t.
// It is safe to assume that t will not have repetetive characters.

let sortByString = function(s, t) {
  // An empty array to place sorted values in.
  sortedArray = [];
  // Make these strings into arrays.
  sArray = s.split("");
  tArray = t.split("");
  // We can now loop through t
  for (let i = 0; i <= tArray.length - 1; i++) {
    // and search for every appearence of that index of t, in s
    for (let j = 0; j <= sArray.length - 1; j++) {
      // if the index of t matches the index of s,
      if (tArray[i] === sArray[j]) {
        // push the index of s into our sorted array.
        sortedArray.push(sArray[j]);
      }
    }
  }
  // turn our sorted array into a string.
  let sortedString = sortedArray.join("");
  // return our newly sorted freind.
  console.log(sortedString);
  return sortedString;
};

sortByString("hello", "olah");
sortByString("weather", "therapyw");
sortByString("good", "odg");
