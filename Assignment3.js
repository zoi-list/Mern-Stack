//Q1  Class Creation and Object Instantiation:
// Create a Person class with properties name, age, and gender.
// Add a method describe that returns a string with all the person&#39;s details.
//Instantiate three objects of the Person class and log their details using the describe method.

/*class Person {

    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    describe() {
        return `Name: ${this.name} Age: ${this.age},Gender: ${this.gender}`;
      }
}

const person1 = new Person("gitaa", 30, "female");
const person2 = new Person("rahul", 25, "Male");
const person3 = new Person("ajay", 35, "Non-binary");

console.log(person1.describe());
console.log(person2.describe());
console.log(person3.describe());                                */

//output  Name: gita, 
 //       Age: 30,
    //    Gender: female
//Name: rahul, 
 //      Age: 25,
   //     Gender: Male
//Name: ajay, 
  //     Age: 35,
    //    Gender: Non-binary


//Q2Class Inheritance:
  // Create a Student class that inherits from the Person class.
 // Add an additional property studentID and a method study that returns a string stating the student is studying.
  //  Instantiate an object of the Student class and demonstrate the inherited and new properties/methods.    

 

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Method to return a string 
  describe() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

class Student extends Person {
  constructor(name, age, gender, studentID) {
    
    super(name, age, gender);
    
    this.studentID = studentID;
  }
  study() {
    return `Student ${this.name} is studying.`;
  }


  describe() {
    return `${super.describe()}, 
            Student ID: ${this.studentID}`;
  }
}


const student1 = new Student("Samma", 20, "Male", "S12345");


console.log(student1.describe()); 
console.log(student1.study());    
 
  //Q3.Map Operations:
//Create a map to store student names and their corresponding scores.
//Write functions to add a student, remove a student, and get a student&#39;s score.
//Demonstrate the usage of these functions.

  // Create a map 
const studentScores = new Map();

// Function to add 
function addStudent(name, score) {
  studentScores.set(name, score);
}

// Function to remove 
function removeStudent(name) {
  studentScores.delete(name);
}

// Function to get a student's score by name
function getStudentScore(name) {
  return studentScores.get(name);
}



// Add students
addStudent("Rohit", 18);
addStudent("dev", 25);
addStudent("Rama", 78);

// Get and log student scores
console.log(getStudentScore("Rohit"));   
console.log(getStudentScore("dev"));     


removeStudent("Rama");

// Try to get the removed student
console.log(getStudentScore("Rama")); 


console.log(studentScores);
 // Output: Map { 'Rohit' => 18, 'dev' => 25 }

 
//  4. Set Operations:
// Create a set to store a collection of unique courses.
// Write functions to add a course, remove a course, and check if a course exists in the set.
// Demonstrate the usage of these functions.

// Initialize a new Set 
const courses = new Set();

// To add a course
function addCourse(course) {
  if (courses.has(course)) {
    console.log(`The course '${course}' is already in the set.`);
  } else {
    courses.add(course);
    console.log(`The course '${course}' has been added.`);
  }
}


function removeCourse(course) {
  if (courses.has(course)) {
    courses.delete(course);
    console.log(`The course '${course}' has been removed.`);
  } else {
    console.log(`The course '${course}' does not exist.`);
  }
}

function hasCourse(course) {
  if (courses.has(course)) {
    console.log(`The course '${course}' exists .`);
  } else {
    console.log(`The course '${course}' does not exist.`);
  }
}


addCourse('BCA 10');
addCourse('MCA 20');
addCourse('MBA 30');

console.log('Current courses:', [...courses]);

hasCourse('BCA 10');
hasCourse('MBA 30');

removeCourse('MCA 20');
removeCourse('MBA 30');

console.log('Current courses:', [...courses]);


// //Q5 Object Methods:
//  Create an object calculator with methods for add, subtract, multiply, and divide.
//  Each method should take two numbers and return the result.
//  Demonstrate the usage of these methods.


const calculator = {
  add: function(a, b) {
    return a + b;
  },

  
  subtract: function(a, b) {
    return a - b;
  },

  
  multiply: function(a, b) {
    return a * b;
  },

  
  divide: function(a, b) {
    if (b === 0) {
      return ' Division by zero is not allowed.';
    }
    return a / b;
  }
};


const num1 = 2;
const num2 = 25;

console.log(`Add: ${num1} + ${num2} = ${calculator.add(num1, num2)}`);
console.log(`Subtract: ${num1} - ${num2} = ${calculator.subtract(num1, num2)}`);
console.log(`Multiply: ${num1} * ${num2} = ${calculator.multiply(num1, num2)}`);
console.log(`Divide: ${num1} / ${num2} = ${calculator.divide(num1, num2)}`);

// division by zero
console.log(`Divide by zero: ${num1} / 0 = ${calculator.divide(num1, 0)}`);


//Q7 Custom Error Classes:
//Create a custom error class ValidationError that extends the built-in Error class.
//Write a function validateUser that takes a user object and validates its
//properties (e.g., name must be a string, age must be a number and non - negative).
//Throw ValidationError with an appropriate message if validation fails.
//Write a function to call validateUser and handle any exceptions, printing an appropriate message.



// Custom ValidationError class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Function to validate a user object
function validateUser(user) {
  if (typeof user.name !== 'string') {
    throw new ValidationError('Name must be a string.');
  }
  if (typeof user.age !== 'number' || user.age < 0) {
    throw new ValidationError('Age shoule must be a non-negative number.');
  }
  console.log('User is valid.');
}

// Function to call validateUser and handle exceptions
function processUser(user) {
  try {
    validateUser(user);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(`Validation Error: ${error.message}`);
    } else {
      console.log(`Unexpected Error: ${error.message}`);
    }
  }
}

// Demonstration
const validUser = { name: 'Ajay', age: 25 };
const invalidUser1 = { name: 564, age: 50 };
const invalidUser2 = { name: 'Ashis', age: -6 };

console.log(' valid user:');
processUser(validUser);

console.log('\ user with invalid name:');
processUser(invalidUser1);

console.log('\ user with invalid age:');
processUser(invalidUser2);

// //Q10 Creating Custom Error Classes:
//Create a custom error class InvalidAgeError that extends the built-in Error class.
//Write a function checkAge that takes an age and throws an InvalidAgeError if the age is less than 0 or greater than 120.
// Demonstrate the usage of this function with both valid and invalid ages. 


// Custom InvalidAgeError class
class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidAgeError';
  }
}

// Function to check age
function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError('Age should must be between 0 and 120.');
  }
  console.log('Age is valid.');
}

// Function to demonstrate the usage of checkAge and handle exceptions
function processAge(age) {
  try {
    checkAge(age);
  } catch (error) {
    if (error instanceof InvalidAgeError) {
      console.log(`Invalid Age Error: ${error.message}`);
    } else {
      console.log(`Unexpected Error: ${error.message}`);
    }
  }
}


const validAge = 55;
const invalidAge1 = -45;
const invalidAge2 = 2055;

console.log('valid age:');
processAge(validAge);

console.log('\ age less than 0:');
processAge(invalidAge1);

console.log('\ age greater than 120:');
processAge(invalidAge2);

