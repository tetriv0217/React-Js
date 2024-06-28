import "./App.css";
import { useState } from "react";
function App() {
  //Use state gives an array,[firstValueIsVariable,Function]
  //whole syntax =>let [] = useState()
  const [counter, setCounter] = useState(15);
  const [message, setMessage] = useState("");

  // let counter = 15;

  const addValue = () => {
    // console.log("add value",Math.random());
    // counter = counter + 1;
    if (counter+4 > 21) {
      setMessage("Value above 20");
      console.log(`Value Cant be updated`);
    } else {
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
      setMessage("");
    }
    console.log("clicked", counter);
  };
  const removeValue = function () {
    if (counter < 1) {
      setMessage("Value less than 0");
      console.log(`Value Cant be updated`);
    } else {
      setCounter(counter - 1);
      setMessage("");
    }
  };
  return (
    <>
      <h1>Heloo</h1>
      <h2>Counter Val : {counter} </h2>
      <button onClick={addValue}>Add value</button>
      {message && <p>{message}</p>}
      {/* Here value doesnt get added */}
      <br />
      <button onClick={removeValue}>Remove Value</button>
   
    </>
  );
}

export default App;
