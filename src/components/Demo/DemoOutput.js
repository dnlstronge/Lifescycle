import React from "react";


/* Render text conditionally this time */


const DemoOutput = (props) => {
    return (
        <p>{props.show ? "The text to display goes here" : ""}</p>
    )
};

export default DemoOutput;