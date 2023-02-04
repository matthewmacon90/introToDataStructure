//Problem 1: 

/* Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

const countUniqueValues = (arr) => {
    let uniqueValues = 0;
    let left = 0;
    let right = 1;
    // const movePointers = right++ left++;
    if (arr.length === 0) return 0;
    while (right <= arr.length) {
        if (arr[left] === arr[right]) {  //If equal move both right and left pointers up 1
            // movePointers;
            right++;
            left++;
        } else {                                 //If not equal increase val by 1 and move pointers to continue comparing
            // movePointers;
            right++;
            left++;
            uniqueValues++;
        }
    }
    return uniqueValues;
}



console.log('firstTest:', countUniqueValues([1,1,1,1,1,2])) // 2
console.log('secondTest:', countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log('thirdTest:', countUniqueValues([])) // 0
console.log('fourtTest:', countUniqueValues([-2,-1,-1,0,1])) // 4


// Problem 3:
/*
Write a function called avgPair.
Given a sorted array of integers and a target average, determine if there is a pair of values in the
array
where the average of the pair equals the target average.
There may be more than one pair that matches the average target.
*/
const avgPair = (arr, avgTarget) => {
    let left = 0;
    let right = arr.length - 1;
    if (arr.length === 0) return false; 
    while (left < right) {
        let average = arr[left] + arr[right] / 2;
        if(average === avgTarget) {
            return true;
        } else {
            left++;
            right--;
        }
    }
    return false;
}
// Test Cases:
console.log(avgPair([1,2,3],2.5)) //true
console.log(avgPair([1,3,3,5,6,7,10,12,19],8)) //true
console.log(avgPair([-1,0,3,4,5,6], 4.1)) //false
console.log(avgPair([],4)) //false