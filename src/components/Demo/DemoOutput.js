import React from "react";


/* Render text conditionally this time */


const DemoOutput = (props) => {

    console.log("the props have changed so I fire")
    return (
        
        <p>{props.show ? "The text to display goes here" : ""}</p>
    )
};

export default DemoOutput;