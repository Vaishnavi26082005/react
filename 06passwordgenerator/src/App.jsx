import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [Password, setpassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  // Generate password
  const password = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (number) str += "1234567890";
    if (char) str += "@#$%^&*";

    for (let i = 0; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }
    setpassword(pass);
  }, [length, number, char]);

  // Copy to clipboard
  const cptpclip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100); // Correct method name
    navigator.clipboard.writeText(Password); // Use Password state
  }, [Password]);

  // Regenerate password on dependency change
  useEffect(() => {
    password();
  }, [length, char, number, password]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={cptpclip}
            className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(parseInt(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="ni"
              onChange={() => setnumber((prev) => !prev)}
            />
            <label htmlFor="ni">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={char}
              id="ci"
              onChange={() => setchar((prev) => !prev)}
            />
            <label htmlFor="ci">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
