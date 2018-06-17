// The function, changePossibilities, is passed two parameters, amount (integer), denom (array of integers).
// The first parameter is an integer that represents the amount of money with coins.
// The second parameter is an array of integers that represent the available coin denominations.
// The function should return all the compare ways the denominations can sum up to the amount given. ¢.¢ $.$

// I'll try to break this down a bit.

// GENERAL NOTE: We may have to do something with division, then check for remainders(modulus), add them all up -- if they equal four you  can return That.
// loop through denom (the array of coin denominations)
// Here we'll see all the different ways that coin can add up to the amount.
// We'll set conditionals to decide if we'll even be moving forward with checking that pair
// We'll also loop through the rest of the items in the array to see what items can pair with it.

// Okay, if foo + foo does not equal bar, add foo again until it does, and when it does, ~print that number the amount of times you had to add it with the cent sign concatenated~.
// Then if that same thing(1) + a number that is one bigger than it(2) does not add up to the number, add that number (1) to the equation, again, until it equals it, repeat what's enclosed in ~...~
// do this again with our first number (1) and a number that is one bigger than the last (3), repeat what's enclosed in ~...~

// Let me try to phrase this better.
// YOU can do this by adding the index of the numbers from the array, into another array (that just holds two items at a time.)
// Run the test with the first index of denom, as both indexes in the array.
// When you've finally gotten to the end and met the condition, swap index 2 of the array with the index 2 of denom, then index 3 of denom, and so on and so forth.
// WHEN you've met all passed all the denom indexes to the array's second index (index[1]), you will then swap the first index(index[0]), with the next index of denom, then reset the second index of the array to the same index as the first.
// EXAMPLE: lifecycle of the array: [denom[0], denom[0]] -> [denom[0], denom[1]] -> [denom[0], denom[2]] -> [denom[1], denom[1]] -> [denom[1], denom[2]] -> [denom[2], denom[2]]
// We may also have to make another empty array to push the successful denomiation combinations.

// I think I know how to do this... Sorry if it's all in shambles!
// Enough! Let's get coding.

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
    }
    compare[0] = denom[i];
    for (let j = i; j < denom.length; j++) {
      // hold the amount of times you'll need to concatenate denom[i] in a variable (this is the incubator).
      let x = 1;
      // This will make sure that we only push into compare if it has only one item. This way we can keep changing compare[1] (second index).
      if (compare.length < 2) {
        compare.push(denom[j]);
      }
      compare[1] = denom[j];
      // This is where we have to logic out these possible denominations.
      // the sum of the possible denomination combination.
      let sum = denom[i] + denom[j];
      while (sum < amount) {
        console.log("SUM: " + sum);
        sum += denom[i];
        console.log(x);
        x++;
      } // <~ End of while loop
      if (sum == amount) {
        console.log("sum: " + sum);
        console.log("Amount: " + amount);
        // Break these into segments that we can use to get the full denomination combination.
        part1 = denom[i] + "¢ ";
        part2 = denom[j] + "¢ ";
        let answer = part1.repeat(x) + part2;
        console.log(answer);
        finalAns.push(answer);
      } // <~ End of if statement
      console.log(compare);
    } // <~ End of nested for loop (starts on line 41)
    console.log(compare);
  } // <~ End of first for loop (starts on line 35)
  console.log(answer);
  console.log(compare);
  console.log(finalAns);
  return finalAns;
};

changePossibilities(4, [1, 2, 3]);
