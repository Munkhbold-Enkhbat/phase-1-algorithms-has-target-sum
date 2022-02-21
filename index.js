// let hasTargetSum = (array, target) => {
//   // write your algorithm here
//   for(let i = 0; i < array.length; i++) {
//     for(let j = i + 1; j < array.length; j++) {
//       if( array[i] + array[j] === target) return true
//     }
//   }
//   return false
// }

let hasTargetSum = (array, target) => {
  let seenNumbers = {}
  for(let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    if(seenNumbers[complement]) return true
    seenNumbers[array[i]] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n) * O(n) + O(n) + O(1) => O(n^2) + O(n) + O(1) => O(n^2)
*/

/* 
  Add your pseudocode here
  //every integer of array
  // every integer of other integers in array 
  //  if their sum is equal to target 
  //   return true
  //  else 
  //   return false
*/

/*
  Add written explanation of your solution here
  //take every integer of array 
  //and check with other integers in array
  //if not same num and their sum is equal to target
  //return true if yes
  //otherwise
  //return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
