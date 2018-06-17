// The function, changePossibilities, is passed two parameters, amount (integer), denom (array of integers).
// The first parameter is an integer that represents the amount of money with coins.
// The second parameter is an array of integers that represent the available coin denominations.
// The function should return all the compare ways the denominations can sum up to the amount given. ¢.¢ $.$

// Add the index of the numbers from the array, into another array (that just holds two items at a time).
// Run the test with the first index of denom, as both indexes in the array.
// When you've finally gotten to the end and met the condition, swap index 2 of the array with the index 2 of denom, then index 3 of denom, and so on and so forth.
// WHEN you've met all passed all the denom indexes to the array's second index (index[1]), you will then swap the first index(index[0]), with the next index of denom, then reset the second index of the array to the same index as the first.
// EXAMPLE: lifecycle of the array: [denom[0], denom[0]] -> [denom[0], denom[1]] -> [denom[0], denom[2]] -> [denom[1], denom[1]] -> [denom[1], denom[2]] -> [denom[2], denom[2]]
// We may also have to make another empty array to push the successful denomiation combinations.

let changePossibilities = (amount, denom) => {
  // hold successful coin denomination combinations.
  finalAns = [];
  // compare two coin denominations.
  let compare = [];
  // single successful coin denomination.
  let answer = null;
  for (let i = 0; i < denom.length; i++) {
    // This will make sure that we only push into compare when it has no items inside.
    if (compare.length < 1) {
      compare.push(denom[i]);
    } // <~ if statement
    compare[0] = denom[i];
    for (let j = i; j < denom.length; j++) {
      // hold the amount of times you'll need to concatenate denom[i] in a variable (this is the incubator).
      let x = 1;
      // This will make sure that we only push into compare if it has only one item. This way we can keep changing compare[1] (second index).
      if (compare.length < 2) {
        compare.push(denom[j]);
      } // <~ if statement
      compare[1] = denom[j];
      // This is where we have to logic out these possible denominations.
      // the sum of the possible denomination combination.
      let sum = denom[i] + denom[j];
      while (sum < amount) {
        sum += denom[i];
        x++;
      } // <~ End of while loop
      if (sum == amount) {
        // Break these into segments that we can use to get the full denomination combination.
        part1 = denom[i] + "¢ ";
        part2 = denom[j] + "¢ ";
        let answer = part1.repeat(x) + part2;
        finalAns.push(answer);
      } // <~ End of if statement
    } // <~ End of nested for loop (starts on line 41)
  } // <~ End of first for loop (starts on line 35)
  return finalAns;
};

changePossibilities(4, [1, 2, 3]);
