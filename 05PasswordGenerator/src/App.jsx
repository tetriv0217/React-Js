import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState(false);

  // const passwordGenerator = useCallback(fn,[dependencies]) Syntax
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "~!@#$%^&*()_+{}:;'/.,:[]|";
    }
    for (let i = 0; i <= length; i++) {
      let charInd = Math.floor(Math.random() * str.length + 1);
      pass += str[charInd];
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value = {password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button 
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy</button>
      </div>
      <div className=" flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 ">
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange = {(e) => {setLength(e.target.value)}}  />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1" >
          <input
          type = "checkbox"
          defaultChecked = {numAllowed}
          id = "numberInput"
          onChange={()=>{
            setnumAllowed((prev)=>!prev);
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1" >
          <input
          type = "checkbox"
          defaultChecked = {charAllowed}
          id = "charInput"
          onChange={()=>{
            setcharAllowed((prev)=>!prev);
          }} />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
