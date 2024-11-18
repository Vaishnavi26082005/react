import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {


  // let counter=5;
 let[counter,setCounter]=useState(15)
const addvalue=()=>{
 
   setCounter(counter+1)
}

const remove=()=>{
setCounter(counter-1)

}
return ( 
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addvalue}
      >Add Value</button>
      <br></br>
      <button
      onClick={remove}
      >Remove Value</button>
     </>
    
  )
}

export default App
