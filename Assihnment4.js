 /* 
 //Q1 

function fetchData(url) {
  return new Promise((resolve, reject) => {
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
  
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        
        resolve(data);
      })
      .catch(error => {
      
        reject('Fetch error: ' + error.message);
      });
  });
}

//  Call  then catch, and finally.
fetchData('https://jsonplaceholder.typicode.com/posts')
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })
  .finally(() => {
    console.log('Fetch attempt finished.');
  });

  */

  
  //Q2 

  // Create a function createCounter
function createCounter(initialValue, stepSize) {
  let currentValue = initialValue;

  return {
    // increment method 
    increment: function() {
      currentValue += stepSize;
    },

    // decrement method 
    decrement: function() {
      currentValue -= stepSize;
    },

    // reset method 
    reset: function() {
      currentValue = initialValue;
    },

    //  getValue method 
    getValue: function() {
      return currentValue;
    }
  };
}

// creating a counter 
const counter = createCounter(6, 4);

console.log(counter.getValue()); 
counter.increment();
console.log(counter.getValue()); 
counter.increment()
console.log(counter.getValue()); 
counter.decrement();
console.log(counter.getValue());
counter.reset();
console.log(counter.getValue()); 


//Q3

//  Create a class User with a constructor that takes  name parameter.
class User {
  constructor(name) {
    this.name = name;
    // Use bind method 
    this.greet = this.greet.bind(this);
  }

  // method greet 
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const user = new User('Askah');
user.greet(); 
// Output: Hello, my name is Askash




//Q4
//  Create  createDataFetcher that returns an object with two methods: fetchData and getData.
function createDataFetcher() {
  let data = null; 

  return {
  
    fetchData: function(url) {
      return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(fetchedData => {
          data = fetchedData;
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    },

    
    getData: function() {
      return data;
    }
  };
}


const dataFetcher = createDataFetcher();

dataFetcher.fetchData('https://jsonplaceholder.typicode.com/posts')
  .then(() => {
    console.log('Fetched Data:', dataFetcher.getData());
  });

  