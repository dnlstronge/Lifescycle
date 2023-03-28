import React, {useState} from 'react';


/* [1] - Create a button which adds a paragraph below the h1 tag */


// styles
import './App.css';


function App() {
  const [addPara, setAddPara] = useState(false)
  const handleButton = () => {
    setAddPara(addPara ? false : true)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {addPara && 
      <p>Added Paragraph to demonstrate how react and dom updating works</p>}
      <button onClick={handleButton}>Add Paragraph</button>
    </div>
    
  );
}

export default App;
