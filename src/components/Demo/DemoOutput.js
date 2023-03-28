import React from "react";
import NewParagraph from "../NewParagraph";

/* Render text conditionally this time */

const DemoOutput = (props) => {
  console.log("the props have changed so I fire");
  return <NewParagraph>{props.show ? "Show me if truthy boys" : ""}</NewParagraph>;
};

export default React.memo(DemoOutput);

/* demo react memo */
