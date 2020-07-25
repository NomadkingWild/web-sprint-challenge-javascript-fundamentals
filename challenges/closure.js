// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
 //the reason being is that nested function is still inside the parent function. and variables can be accessed as long as they are within that function anywhere.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation (num) {
  let counter = 0;
  for (let i = 0; i<num+1; i++){
    counter = (counter + i);
  }
  return counter
}
console.log(summation(4))
//function should take the number that I pass in add it to a variable, subtract 1 from it and then add the remainder to the variable and repeat until it is 0.