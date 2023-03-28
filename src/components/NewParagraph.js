import React from "react";


/* Demonstrates the child of parent will also run, even nothing has actually changed */
const NewParagraph = (props) => {
  console.log("Child running");
  return <p></p>;
};

export default NewParagraph;
