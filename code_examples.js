//Problem 2: 
//O(1);
let arrayOfNum = [1,2,3,4,5,6,7,8,9,12,13,14];

const pushExample = (num) => {
    return arrayOfNum.push(num);
};
pushExample(15);
console.log('Push Example: ', arrayOfNum); //Not sure why when I call the function the num passed in is not saving.

//O(n);
const loopExample = (num) => {
    const lastIndex = arrayOfNum.length - 1;
    for (let i = 0; i < arrayOfNum.length; i++) {
        if (i === lastIndex) {
            arrayOfNum.push(num);
            console.log('Inside Loop: ', arrayOfNum);
        };
    };
};
loopExample(16);

//O(logn);
const loopSkip = (num) => {
    const lastIndex = arrayOfNum.length;
    for (let i = 1; i < arrayOfNum.length; i *= 2) {
        console.log('This is loop');
        console.log('I:', arrayOfNum[i]);
        if (i < lastIndex) {                           // If block is not running because we are getting never equal to or greater than array.
            console.log('This is If');
            arrayOfNum.push(num);
            console.log('O(logn) Loop: ', arrayOfNum);
        };
    };
};
loopSkip(20);