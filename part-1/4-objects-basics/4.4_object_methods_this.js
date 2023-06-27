const alert = console.log;
const prompt = require("prompt-sync")();

/* 
Using "this" in object literal
importance: 5

Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

  function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }

  let user = makeUser();

  alert( user.ref.name ); // What's the result?
*/

/* 
My answer: Returns "John" or undefined. Probably John.

Ah okay, it returns undefined. That was my first thought, but then I
second-guessed myself. Ah well.
*/



/* 
Create a calculator
importance: 5

Create an object calculator with three methods:

    read() prompts for two values and saves them as object properties with
      names a and b respectively.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.

  let calculator = {
    // ... your code ...
  };

  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
*/

// eslint-disable-next-line no-unused-vars
let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt("First number? ");
    this.b = +prompt("Second number? ");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// Working and correct



/* 
Chaining
importance: 2

There’s a ladder object that allows to go up and down:

  let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };

Now, if we need to make several calls in sequence, can do it like this:

  ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep(); // 1
  ladder.down();
  ladder.showStep(); // 0

Modify the code of up, down and showStep to make the calls chainable, like
this:

  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

Such approach is widely used across JavaScript libraries.
*/

/* 
Okay now this is some bullshit. We weren't taught chaining. How the hell am I
support to do this?
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

/* 
I tried putting "return" in front of the steps, but it just says:

  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
            ^
  TypeError: ladder.up(...).up is not a function

Okay I give up, I'll look at the solution.
*/

/* 
OHHHHH
You have to return the object itself after every call. Doing "return this;"
at the end of each function.
*/