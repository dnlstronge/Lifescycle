import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";

/* [1] - Create a button which adds a paragraph below the h1 tag 
   [2] - add a console.log to demonstrate the functional firing */

// styles
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  console.log("app running"); 

  const [addPara, setAddPara] = useState(false);

  const handleButton = useCallback(() => {
    setAddPara((prev) => !prev);
  }, []) // tellsreact it has no deps so will never change
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/> 
  
      <Button onClick={handleButton}>Add Paragraph</Button>
    </div>
  );
}

export default App;
