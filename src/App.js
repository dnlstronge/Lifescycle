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
  const [toggleActive, setToggleActive] = useState(false)
  const handleAllow = () => {
    setToggleActive((prev) => !prev) 
  }
  const handleButton = useCallback(() => {
    if(toggleActive) {
    setAddPara((prev) => !prev)}
  }, [toggleActive])
  
  // tells react it has no deps so will never change so samefunction object reused when app rerenders
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/> 
  
      <Button disabled={!toggleActive} onClick={handleButton}>Add Paragraph</Button>
      <Button onClick={handleAllow}>Allow Toggle</Button>
    </div>
  );
}

export default App;



// when a JS function is rendered, the variables used are closed = closure