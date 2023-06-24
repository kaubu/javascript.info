// npm install prompt-sync
const alert = console.log;

/*
[Task 1]
What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}

[Solution]
it will output 3, 2, 1, 0—the last value will be 0

[Answer]
incorrect. x-- returns the old value, and THEN decrements
it will be 3(2), 2(1), 1(0), with the brackets showing the decrementation
before the loop restarts
*/



/*
[Task 2]
Which values does the while loop show?
importance: 4

For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );

The postfix form i++

let i = 0;
while (i++ < 5) alert( i );

[Solution]
Prefix (increment first, then return) outputs: 1, 2, 3, 4
Postfix (return, then increment) outputs: 0(1), 1(2), 2(3), 3(4), 4(5)

They do not alert the same values, postfix outputs 0 first.

[Answer]
Prefix was correct
Postfix was not
* I confused the comparison i with what would be alerted
    I knew it would output 5 numbers, but I should've started with 1,
    because I should've known that prefix or postfix, come the body it will
    be incremented.
*/



/* 
[Task 3]
Which values get shown by the "for" loop?
importance: 4

For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

The postfix form:

    for (let i = 0; i < 5; i++) alert( i );

The prefix form:

    for (let i = 0; i < 5; ++i) alert( i );

[Solution]
Format: Comp(Body)

Postfix (return original value, then increment):
* 

Wait, since it's not used in a comparison, it should be equal.
Because it doesn't used the returned value, it just increments at the end.
I believe both are the same.

[Answer]
Correct
*/



/* 
[Task 4]
Output even numbers in the loop
importance: 5

Use the for loop to output even numbers from 2 to 10.
*/

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// Working
// And my code is basically identical, except for alert() instead of
// console.log()



/* 
Replace "for" with "while"
importance: 5

Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

it will output: "number 0!" 1, 2
*/

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// working and correct



/* 
Repeat until the input is correct
importance: 5

Write a loop which prompts for a number greater than 100. If the visitor enters
another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater
than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to 
implement a special handling for a non-numeric input in this task.
*/

// eslint-disable-next-line no-constant-condition
while (true) {
  // let num = +prompt("Put a number greater than 100: ");
  let num = 125;  // put this here for convenience, so testing the script
  // wouldn't wait for human input

  if (num <= 100) continue;
  else if (num === null || num == "") break;
  else break;
}

// working, but not exactly correct
// the official solution uses a do while loop… makes sense
// Here it is:
// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);
// 



/* 
Output prime numbers
importance: 3

An integer number greater than 1 is called a prime if it cannot be divided
without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything
except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder
by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.

*/

alert("[Primes]");

let n = 99;

outer: for (let i = 2; i <= n; i++) {
  // i = 2–10

  // check if i is a prime
  // counts down from one below i (because it will be divisible by itself) 
  // and checks if there are any divisions
  // if there are any, then continue to outer
  // if there aren't, print it out
  for (let x = i - 1; x >= 2; x--) {
    if (i % x == 0) continue outer;
  }

  alert(i);
}

// it is WORKING!
// surprisingly
// now let's see the official solution

/* 
There are many algorithms for this task.

Let’s use a nested loop:

    For each i in the interval {
    check if i has a divisor from 1..i
    if yes => the value is not a prime
    if no => the value is a prime, show it
    }

The code using a label:

    let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

    for (let j = 2; j < i; j++) { // look for a divisor..
        if (i % j == 0) continue nextPrime; // not a prime, go next i
    }

    alert( i ); // a prime
    }

There’s a lot of space to optimize it. For instance, we could look for the
divisors from 2 to square root of i. But anyway, if we want to be really
efficient for large intervals, we need to change the approach and rely on
advanced maths and complex algorithms like Quadratic sieve, General number
field sieve etc.
*/

// Yep my solution was basically the same, though it took me quite some time
// to get it.