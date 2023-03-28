import React from "react";

const DemoOutput = (props) => {
    return (
        <>
        {props.addPara && (
            <p>Added Paragraph to demonstrate how react and dom updating works</p>
          )}
          </>
    )
};

export default DemoOutput;