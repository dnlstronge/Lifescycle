import React from "react";
import NewParagraph from "../NewParagraph";

/* Render text conditionally this time */


const DemoOutput = (props) => {

    console.log("the props have changed so I fire")
    return (
        <>
        props.show && {
            <NewParagraph />
        }
        </>
    )
};

export default DemoOutput;