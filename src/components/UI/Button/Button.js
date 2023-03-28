import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log("button running")
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);


/* the log still fires has the button changed? 

This is a common GOTCHA with react

it's still called by react and so executes like a normal function (the handler 
  essentially is recreated each time, it is therefore "new", and therefore there is a 
  change happening, tangible or not
  
this is also true for false being passed to demoOutput, it's seen as a new value

so in the simplest terms because the App function is re-executed, any values within are recreated, 
even though they are essentially the same, huh.....!?

e.g false in rendercycle one ===> false(new) in render cycle two, so they are the same logically but
in practical terms totally different.

So why does it appear to prevent re-evaluation for some cases and not for others
This has to do with value types,

here are some examples: 

1) - (primitive ref values)

 123 === 123 ==EVALS TO==> true
 "hi" === "hi" ==EVALS TO==> true

2) - (non-primitive - arrays objects etc)

 [1, 2, 3] === [1, 2, 3] ==EVALS TO==> false
 {1:one, 2:two} === {1:one, 2:two} ==EVALS TO==> false

 1 evaluates as the same, where as two identical arrays for example are different (not React specific
  pure JS)

  AND.......functions are just.......objects

  const onclickevent = () => {
    setSomeValue("x")
  }

  so... the function is created on 1st pass, 

  next, 

  props.onclickevent === props.previous.onclickevent 

  even though the function object is exactly the same in terms of logic and structure, 
  when compared they are seen as different, well because they are objects

  and FINALLY, becaues of this React.memo() sees them as different, and this explains why
  memo prevents re-evaluating sometimes. Its important I think to understand this , hence the 
  length comments. 
  

*/