/**
 * Challenge - Sorted Union
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 * 
 */

function uniteUnique(inputArr, ...rest) {
  const arr = [inputArr, ...rest];
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++){
      if (!output.includes(arr[i][j])){
        output.push(arr[i][j]);
      }
    }
  }
  return output;
}

// TEST CASES
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);            // Should return [1, 3, 2, 5, 4]
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);              // should return [1, 3, 2, [5], [4]]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // should return [1, 2, 3, 5, 4, 6, 7, 8]
uniteUnique([1, 2, 3], [5, 2, 1]);                       // should return [1, 2, 3, 5]
