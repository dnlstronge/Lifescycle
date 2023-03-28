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
  change happening, tangible or not*/