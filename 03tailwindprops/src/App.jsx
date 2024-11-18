import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"vash"
    ,
    age:21,
  }
  let newarr=[1,2,3]

  return (
    <>
      <h1 className=" bg-green-900 p-4 rounded mb-4">Tailwind Test</h1>
     <Card username="chaiaurcode"  />
     <Card username="vaishnavi"/>
    </>
  )
}

export default App
