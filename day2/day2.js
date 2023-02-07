//Problem 1: 

/* Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

//Multiple Pointers Pattern
const countUniqueValues = (arr) => {
    let uniqueValues = 0;
    let left = 0;
    let right = 1;
    if (arr.length === 0) return 0;
    while (right <= arr.length) {
        if (arr[left] === arr[right]) {              //If equal move both right and left pointers up 1
            right++;
            left++;
        } else {                                    //If not equal increase val by 1 and move pointers to continue comparing
            right++;
            left++;
            uniqueValues++;
        };
    };
    return uniqueValues;
};

console.log('firstTest:', countUniqueValues([1,1,1,1,1,2])) // 2
console.log('secondTest:', countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log('thirdTest:', countUniqueValues([])) // 0
console.log('fourtTest:', countUniqueValues([-2,-1,-1,0,1])) // 4

/*
Write a function called, areThereDuplicates which accepts a array of letters,
and checks whether there are any duplicates among the argument passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

//Frequency Counter Pattern
const areThereDuplicates = (arrOfLetters) => {
    //step one: edge cases: 
    if (arrOfLetters.length === 0) return false;

    //step 2: create an empty object to count occurences. 
    let occurences = {};

    //step 3: create a for loop to go through the array.
    for (let val of arrOfLetters) {
        occurences[val] = (occurences[val] || 0) + 1;                     //Why do I need the parentheses???
        // console.log(occurences);
    };
    
    for (let keys in occurences) {
        // console.log('keys:', keys)
        if (occurences[keys] > 1) {
            return true;
        };
    };
    return false;
};
//Tests
console.log('Problem2: ', areThereDuplicates(['a', 'a', 'c', 'd'])); // true
console.log('Problem2: ', areThereDuplicates(['a', 'b', 'c'])); // false

// Problem 3:
/*
Write a function called avgPair.
Given a sorted array of integers and a target average, determine if there is a pair of values in the
array
where the average of the pair equals the target average.
There may be more than one pair that matches the average target.
*/

//Multiple Pointers Pattern
const avgPair = (arr, avgTarget) => {
    let left = 0;
    let right = arr.length - 1;
    if (arr.length === 0) return false; 
    while (left < right) {
        let average = arr[left] + arr[right] / 2;
        if(average === avgTarget) {
            return true;
        } else if (average > avgTarget){
            right--;
        } else {
            left++;
        };
    };
    return false;
};
// Test Cases:
console.log('Problem 3:', avgPair([1,2,3],2.5)) //true
console.log('Problem 3:', avgPair([1,3,3,5,6,7,10,12,19],8)) //true
console.log('Problem 3:', avgPair([-1,0,3,4,5,6], 4.1)) //false
console.log('Problem 3:', avgPair([],4)) //false