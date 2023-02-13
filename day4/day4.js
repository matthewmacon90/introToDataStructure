//Problem 1:

// Write a recursive function called flatTheArray which accepts an array of arrays
// and returns a new array with all values flattened.
const flatTheArray = (arr) => {
    let newArr = [];
    const scaleArray = (arrInput, i = 0) => {
        console.log('arrInput: ', arrInput);
        while (i < arrInput.length) {
            console.log('i: ', i);
            if(Array.isArray(arrInput[i])){
                console.log('1st check arrInput[i]: ', arrInput[i]);
                scaleArray(arrInput[i]);   //Calls the function and if the value is an array then call function...then push it on the next iteration.
            } else {
                console.log('Else check arrInput[i]: ', arrInput[i]);
                newArr.push(arrInput[i]);  //If not an arry pushing the value.
            }
            i++;
        };
    };
    scaleArray(arr);
    console.log('newArr: ', newArr);
    return newArr;

}
//flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
//flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
//flatTheArray([[1],[2],[3]]) // [1,2,3]
//flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

//Problem 2: 

// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.
let words = ['tony', 'kim'];
const capitalizedAllLetters = (array) => {
    let upperCase = [];
    const helper = (arrayInput) => {
        if(arrayInput.length === 0) return;
        console.log('arrayInput BEFORE push: ', arrayInput);
        upperCase.push(arrayInput[0].toUpperCase());
        console.log('upper AFTER push: ', upperCase)
        helper(arrayInput.slice(1));
    };
    helper(array);
    return upperCase;
}
//capitalizedAllLetters(words); // ['TONY', 'KIM']


//Problem 3: 

// example 12: collect Strings
// Write a function called collectStrings which accepts an object and returns
// an array of all the values in the object that have a typeof string
//recursion with helper
let obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
  }
  

function collectStrings(obj) {
    let result = [];
    const helper = (objInput, i = 0) => {
        if(Object.keys(objInput) === 0) return;
        console.log('ObjectInputType: ', typeof objInput);
        // console.log('ObjectInput: ', objInput);
        while (i < Object.values(objInput).length) {
            console.log('i: ', i);
            if(typeof objInput === "string") {
                console.log('If statement ObjectInput: ', objInput);
                result.push(objInput);
                console.log('if Statement Result: ', result);
                i++;
            } else {
                console.log('isObjectType: ', objInput);
                helper(Object.values(objInput)[i]);
            }
            i++;
        }
        // return result;
    };
    helper(obj);
    console.log('Result: ', result);
    return result;
};
console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

//Problem 4:
// Using the bubble sort, please sort each profile 
// by ascending order for the following properties:  
//- age 
//- rating 
// *** If you want to know how to retrieve a value from a map,  
// please see https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Global_Objects/Map/get 

// age (solution should look like) 


const data = [
    {
    name: 'John Smith',
    age: new Map([['age', 88]]),
    favoriteMovie: [
    {
    title: 'Hulk',
    genre: 'action',
    rating: 6
    }
    ]
    },
    {
    name: 'Tony Kim',
    age: new Map([['age', 3]]),
    favoriteMovie: [
    {
    title: 'Top Gun',
    genre: 'action',
    rating: 10
    }
    ]
    },
    {
    name: 'John Smith',
    age: new Map([['age', 35]]),
    favoriteMovie: [
    {
    title: 'Saw',
    genre: 'horror',
    rating: 8
    }
    ]
    }
    ]

const bubbleSortData = (data) => {
//Create Wall

};
bubbleSortData(data);



// const sortedByAge = [  
// {  
//    name: 'Tony Kim',   
//    age: new Map([['age', 3]]),   
//    favoriteMovie: [  
//        {  
//            title: 'Top Gun',   
//            genre: 'action',   
//            rating: 10  
//        }  
//    ]  
// },  
// {  
//    name: 'John Smith',   
//    age: new Map([['age', 35]]),   
//    favoriteMovie: [  
//        {  
//            title: 'Saw',   
//            genre: 'horror',   
//            rating: 8  
//        }  
//    ]  
// }, 
// {  
//    name: 'John Smith',   
//    age: new Map([['age', 88]]),   
//    favoriteMovie: [  
//        {  
//            title: 'Hulk',   
//            genre: 'action',   
//            rating: 6  
//        }  
//    ]  
// } 
// ] 








// favorite movie by rating (solution should look like) 

// const sortedByRating = [  
// {  
//    name: 'John Smith',   
//    age: new Map([['age', 88]]),   
//    favoriteMovie: [  
//        {  
//            title: 'Hulk',   
//            genre: 'action',   
//            rating: 6  
//        }  
//    ]  
// },  
// {  
//    name: 'John Smith',   
//    age: new Map([['age', 35]]),   
//    favoriteMovie: [  
//        {  
//            title: 'Saw',   
//            genre: 'horror',   
//            rating: 8  
//        }  
//    ]  
// }, 
// {  
//    name: 'Tony Kim',   
//    age: new Map([['age', 3]]),   
//    favoriteMovie: [  
//        {  
//            title: 'Top Gun',   
//            genre: 'action',   
//            rating: 10  
//        }  
//    ]  
// } 
// ] 





