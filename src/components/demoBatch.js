
import React, { useState } from "react";
// demo batch update inside a handler for example: 


const [state1, setstate1] = useState("");
const [state2, setstate2] = useState("")




// handler

const handleUpdates = () => {
    setstate1("updated");
    setstate2("updated")
}


/* When two separate state updates are called within the same function React will batch these together */

