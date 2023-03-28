import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

/* [1] - Create a button which adds a paragraph below the h1 tag 
   [2] - add a console.log to demonstrate the functional firing */

// styles
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  console.log("app running"); // logs each time the button is clicked because state has changed and function reexecuted
  const [addPara, setAddPara] = useState(false);
  const handleButton = () => {
    setAddPara((prev) => !prev); // short version setting to opposite of previous state
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/> 
      {/* hardcode this to false so nothing changes but logs still fire??? 
      children part of parent function body, ie the parent changed */}
      <Button onClick={handleButton}>Add Paragraph</Button>
    </div>
  );
}

export default App;
