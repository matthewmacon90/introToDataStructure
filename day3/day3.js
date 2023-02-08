//Problem 1: 
/*
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is
not.
*/
//Sliding Window Pattern:
const maxSubarraySum = (arr, n) => {
    //edge case
    if (arr.length < n) return null;                                //This is for test 5. 

    //create two variables to compare. Max and temp
    let maxSum = 0;
    let tempSum = 0;

    //create the sliding window for the subarray. Using for loop. 
    //first setup is to get the starting point. Must set i < k to create that window. After that set maxSum to add arr[i].
    for (let i = 0; i < n; i++) {
        // console.log('arr[i]: ', arr[i]);
        // console.log('arr[n]: ', arr[n]);
        maxSum += arr[i];
        // console.log('maxSum: ', maxSum);
    };
    tempSum = maxSum;
    // console.log('tempSum: ', tempSum);

    for (let i = n; i < arr.length; i++) {
        //tempSum = 300      2-2 = 0    arr[i]=300 (300 is the value and 2 is the index)
        // console.log('Second for loop BEFORE equation and tempSum: ', tempSum);
        tempSum = tempSum - arr[i-n] + arr[i];
        // console.log('Second for loop AFTER equation and tempSum: ', tempSum);
        // console.log('Second for loop and BEFORE comparison maxSum: ', maxSum);
        maxSum = Math.max(maxSum, tempSum);
        // console.log('Second for loop and AFTER comparison maxSum: ', maxSum);
    }
    return maxSum;
};
//Test Cases:
//console.log('Test1: ', maxSubarraySum([100,200,300,400], 2)) //700
//console.log('Test2: ', maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) //39
//console.log('Test3: ', maxSubarraySum([-3,4,0,-2,6,-1], 2)) //5
//console.log('Test4: ', maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) //5
//console.log('Test5: ', maxSubarraySum([2,3], 3)) //null


//Problem 2:
// Given a sorted array of integers, find the first occurrence of a target value.
// If the target is not found in the array, return -1.
function binarySearchFirstOccurrence(nums, target) {
    //edge case
    //set up two pointers.
    let left = 0;
    let right = nums.length -1;
    let result = -1;

    //create a while loop to traverse the date.
    while (left <= right) {
        //create a middle index and value. 
        let middleIndex = Math.floor((left + right) / 2);             //We use math.floor to ensure we do not get a decimal
        let middleValue = nums[middleIndex];
        // console.log('middleIndex: ', middleIndex);
        // console.log('middleValue: ', middleValue);
        // console.log('target: ', target);

        //set condition to skip through data. 
        if(middleValue === target) {
            result = middleIndex;
            right = middleIndex - 1;
            console.log('Result:', result);
            console.log('Found Target!');
        } else if (middleValue < target) {                             //If middle value is less than target move left pointer to middle index + 1
            left = middleIndex + 1;
        } else {                                                       //Else is midVale is greater than target move right pointer down to middle - 1;
            right = middleIndex - 1;
        };
    };
    return result;
};
// Test cases
// let nums1 = [1, 2, 3, 4, 5];
// let target1 = 3;
// let expected1 = 2;
// let result1 = binarySearchFirstOccurrence(nums1, target1);
// console.assert(result1 === expected1, `Test case 1 failed: expected ${expected1} but got ${result1}`);

// let nums2 = [1, 2, 3, 4, 5];
// let target2 = 6;
// let expected2 = -1;
// let result2 = binarySearchFirstOccurrence(nums2, target2);
// console.assert(result2 === expected2, `Test case 2 failed: expected ${expected2} but got ${result2}`);

// let nums3 = [1, 1, 1, 2, 2, 2, 3, 3, 3];
// let target3 = 2;
// let expected3 = 3;
// let result3 = binarySearchFirstOccurrence(nums3, target3);
// console.assert(result3 === expected3, `Test case 3 failed: expected ${expected3} but got ${result3}`);

//Problem 3:
// Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
    //edge case
    // if(s.length == 0 || s.length == 1) return 1;
    let maxLength = 0;
    //create object to get the unique values.
    let uniqueValue = {};
    //My pointer
    let left = 0;

    for (let i = 0; i < s.length; i++) {
        console.log('i: ', i);
        console.log('s[i]: ', s[i]);
        console.log('uniqueValue:', uniqueValue);
        if (uniqueValue[s[i]] >= left) {
            left = uniqueValue[s[i]] + 1;
            console.log('left: ', left);
        } else {
             uniqueValue[s[i]] = i;
             console.log('uniqueValue:', uniqueValue);
            //  console.log('Else unique I: ', uniqueValue[s[i]]);
        }
        maxLength = Math.max(maxLength, i - left);
        console.log('maxLength: ', maxLength);
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3