// The function, changePossibilities, is passed two parameters, amount (integer), denom (array of integers).
// The first parameter is an integer that represents the amount of money with coins.
// The second parameter is an array of integers that represent the available coin denominations.
// The function should return all the compare ways the denominations can sum up to the amount given. ¢.¢ $.$

// okay we may have to abandon this all together {
// I'll just start with testing
let test3 = (amount, denom) => {
  let i = 0;
  while (i <= denom.length) {
    console.log("single coin value: " + denom[i]);
    console.log(amount / denom[i]);
    if (amount % denom[i] == 0) {
      let coin = denom[i] + "¢";
      console.log("If Statement #1: " + coin.repeat(amount / denom[i]));
    } else if (amount / denom[i] == amount) {
      // if the coin is one cent
      let ok = denom[i] + "¢";
      console.log("If Statement #2: " + ok.repeat(amount));
      console.log("...");
    }
    i++;
  } // <~ while loop
  // maybe a while loop would be easier to work with, here
  // for (let i = 0; i <= denom.length; i++) {
  //   console.log(denom[i]);
  //   // okay, we can add it by itself
  // }
};
// } <~ because it's not working
test3(4, [1, 2, 3]);

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
