import React from "react";
import NewParagraph from "../NewParagraph";

/* Render text conditionally this time */

const DemoOutput = (props) => {
  console.log("the props have changed so I fire");
  return <NewParagraph>{props.show ? "Show me if truthy boys" : ""}</NewParagraph>;
};

export default React.memo(DemoOutput);

/* demo react memo, doesn't work for class based componenets though 

what does memo do you say.....? 

Tells react to look at the props a component gets, 
check the new value those props got and compare
it to the previous value those props got, 
if the value of the prop has changed it tells it to re-evaluate it, 
if it hasn't changed then component EXECUTION can be skipped

to show this: the log in NewParagraph "child running" should no longer 
show in console


this is a simple example of optimisation => avoids unneccessary re-rendering
meo has a cost itself, so it's a case of whether it is worth it or not on a component 
case by case basis

so it's cost of re-evaluating vs cost of comparing props
*/
