/* 
Bad style
importance: 4

What’s wrong with the code style below?

  function pow(x,n)
  {
    let result=1;
    for(let i=0;i<n;i++) {result*=x;}
    return result;
  }

  let x=prompt("x?",''), n=prompt("n?",'')
  if (n<=0)
  {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
  }
  else
  {
    alert(pow(x,n))
  }
*/

/* 
My answers:
1. no egyptian style brackets
2. no spaces between variable name, assignment operator, and expression
3. no splitting code up into chunks with line breaks
4. no space after 'for', between the loop's arguments and code block
5. no spaces in general between arguments
6. no semicolon at one point
*/