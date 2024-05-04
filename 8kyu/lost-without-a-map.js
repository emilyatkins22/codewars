//Instructions
/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

//Solution
function maps(arr){
    let doubledNums = []
    for (let i = 0; i < arr.length; i++){
      let dub = arr[i]
      let dubb = dub*2
      doubledNums.push(dubb)
    }
    return doubledNums
  }
  
  