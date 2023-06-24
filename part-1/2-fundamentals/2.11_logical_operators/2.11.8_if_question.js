/* eslint-disable no-constant-condition */
// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( "first" ); // true
if (-1 && 0) alert( "second" ); // false
if (null || -1 && 1) alert( "third" ); // false—incorrect, this will activate
// oh yup I'm dumb, I thought -1 && 1 = false, because I forgot anything
// non-zero is truthy (which I remembered for the ones above)