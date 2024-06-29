import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState(false);
  const [color, setColor] = useState("blue");

  //
  const passwordRef = useRef(null);
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
    for (let i = 1; i <= length; i++) {
      let charInd = Math.floor(Math.random() * str.length);
      pass += str[charInd];
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  //Callback should be memoized
  //Here setPassword should be used
  //The more value you store in dependecies higher the chance that it is faster to fetch values

  // Next js dont have window as it is server side rendering code
  
  const changeColor = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    setColor("black")
  }
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          style={{backgroundColor : color}}
          onClick={changeColor}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className=" flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 ">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
              setColor("blue")
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setnumAllowed((prev) => !prev);
              setColor("blue")
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setcharAllowed((prev) => !prev);
              setColor("blue")
            }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
