
//Q1. Write a function that takes an array of numbers and returns the first and last elements of the array.

function getFirstAndLast(arr) {
    if (arr.length === 0) {
        return null; // or you can return an empty array, or throw an error based on your needs
    }
    return [arr[0], arr[arr.length - 1]];
}


let numbers = [1, 2, 3, 4, 5];
let result = getFirstAndLast(numbers);
console.log(result); 
// Output: [1, 5]


// Q2.  Write a function that returns a new array with each number squared using the map method


function squareNum(arr) {
        return arr.map(function(num) {
            return num * num;
        });
    }
    

    let num = [1, 2, 3, 4, 5];
    let squaredNumbers = squareNum(num);
    console.log(num);
    console.log(squaredNumbers); 
    // Output: [1, 4, 9, 16, 25]
    
//Q3.Explain the output of the following code snippet and why,
console.log(foo);
var foo = "Hello, World!"; 
//Here we have use the console (foo) before the declarations of foo varaiable so it will give is undefine 

console.log(foo);       
//but if  again use the console(foo) after the decleration we will get the output ---Hello world--                        
//Hello, World!

//Q4.Merge two arrays and add an additional element at the beginning of the merged array using the spread operator.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const additionalElement = 0;
const mergedArray = [additionalElement, ...array1, ...array2];

console.log(mergedArray);
// Output: [0, 1, 2, 3, 4, 5, 6]

//Q5.  Given an array of objects representing users with name and age properties, write a function that returns an array of names of users who are over18.
const users = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 15 }
  ];
  function nameOver18(users)
  {
    return users.filter(users=>users.age>18)
  }
  console.log(nameOver18(users))
// output name Alice age 22
//        name charlie age 19                                             

//Q6.Write a function that takes an array of numbers and returns an object with two properties: sum, the sum of all the numbers, and product,
// the product of all the numbers using reduce method

function SumAndProduct(numbers) {
    const result = numbers.reduce((acc, num) => {
      acc.sum += num;
      acc.product *= num;
      return acc;
    },{ sum: 0, product: 1 });
  
    return result;
  }
  
  const numbers = [1, 2, 3, 4];
  const result = SumAndProduct(numbers);
  console.log(result); 
  // Output: { sum: 10, product: 24 }
                                                                    

  //Q7 7. Write a function that returns the array sorted by the length of each string, in ascending order.

  function sortArray(arr){
    return arr.sort((a,b) => a.localeCompare(b));

  }
let array =["apple","parrot","drum","cat","ball"]
console.log(sortArray(array))

//output [ 'apple', 'ball', 'cat', 'drum', 'parrot' ]

//Q8. Given an array of numbers, write a function that returns the index of the first number that is greater than 10.
// If no such number exists, return -1.

function findGreater(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 10) {
        return i;
      }
    }
    return -1;
  }
  
  const numbers = [1, 2, 9, 11, 12, 50];
  const index = findGreater(numbers);
  console.log(index);
  
  // Output: 3
  
  //Q9. Write a function that removes the third element from an array and returns a new array with the removed element.
  // Do not modify the original array.  

  function removeThirdElement(arr) {
    const newArray = arr.slice();
  
    const removedElement = newArray.splice(2, 1)[0];
    return { newArray, removedElement };
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const result = removeThirdElement(originalArray);
  
  console.log(result.newArray);
   // Output: [1, 2, 4, 5]

  console.log(originalArray); 
  // Output: [1, 2, 3, 4, 5]
  


  //Q 10 Write a function that concatenates two arrays without using the concat method.

  function concatenateArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = concatenateArrays(array1, array2);
  
  console.log(concatenatedArray); 
  // Output: [1, 2, 3, 4, 5, 6]
  