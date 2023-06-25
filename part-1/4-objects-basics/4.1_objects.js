// eslint-disable-next-line no-global-assign
alert = console.log;

/* 
Hello, object
importance: 5

Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
*/

let user = new Object();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Correct



/* 
Check for emptiness
importance: 5

Write the function isEmpty(obj) which returns true if the object has no
properties, false otherwise.

Should work like that:

  let schedule = {};

  alert( isEmpty(schedule) ); // true

  schedule["8:30"] = "get up";

  alert( isEmpty(schedule) ); // false
*/

function isEmpty(obj) {
  let props = 0;

  // eslint-disable-next-line no-unused-vars
  for (let prop in obj) {
    props++;
  }

  if (props == 0) return true;
  else return false;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// Working and inefficient compared to the official solution
// The official solution:
/* 
  function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }
*/



/* 
Sum object properties importance: 5

We have an object storing salaries of our team:

  let salaries = { John: 100, Ann: 160, Pete: 130
  }

Write the code to sum all salaries and store in the variable sum. Should be 390
in the example above.

If salaries is empty, then the result must be 0.
*/

function getSalariesSum(obj) {
  let total = 0;

  for (let person in obj) {
    total += obj[person];
  }

  return total;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let empty_salaries = {
  Andrew: 0,
  Niamh: 0,
};

alert(getSalariesSum(salaries));
alert(getSalariesSum(empty_salaries));

// Working and basically identical to the official solution, except in that I
// made a function out of it and they didn't (though it's kinda fair, sicne
// they never asked for a function).



/* 
Multiply numeric property values by 2
importance: 3

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

  // before the call
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  multiplyNumeric(menu);

  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

Please note that multiplyNumeric does not need to return anything. It should
modify the object in-place.

P.S. Use typeof to check for a number here.
*/

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") obj[prop] *= 2;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

alert(menu.width);
alert(menu.height);
alert(menu.title);

multiplyNumeric(menu);

alert("---");
alert(menu.width);
alert(menu.height);
alert(menu.title);

// Working and nigh-identical to the original