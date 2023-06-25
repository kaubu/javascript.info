/* 
What's wrong in the test?
importance: 5

What’s wrong in the test of pow below?

it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

P.S. Syntactically the test is correct and passes.
*/

/* 
My answer:
1. The "let x = 5;" and "let result = x;" lines should be in the before()
functions.
2. The asserts should be on separate it() functions, because if one fails it
won't test the rest.

*/

/* 
Correct answer:
Yep, I was correct. Break the function into multiple it blocks.
*/