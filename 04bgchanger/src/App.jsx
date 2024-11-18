import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive")

  return (
    
    <div className="w-full h-screen duration-200 "
    style={{
      backgroundColor:color
    }}>
    <div className="grid place-content-center h-screen">
  <h1 className="text-white text-4xl shadow-2xl">Background Changer</h1>
</div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl order  border-2 border-black">
          <button onClick={()=>setColor("lavender")} className="outline-none px-3 py-3 rounded-full shadow-2xl"
          style={{backgroundColor:"lavender"}}>Lavender</button>

<button onClick={()=>setColor("red")} className="outline-none px-7 py-3 text-white  rounded-full shadow-2xl"
          style={{backgroundColor:"red"}}>Red</button>
          
          <button onClick={()=>setColor("blue")}  className="outline-none text-white px-6 py-3 rounded-full shadow-2xl"
          style={{backgroundColor:"blue"}}>Blue</button>

<button onClick={()=>setColor("black")} className="outline-none px-6 py-3 rounded-full text-white shadow-2xl"
          style={{backgroundColor:"black"}}>Black</button>

<button onClick={()=>setColor("green")} className="outline-none px-6 py-3 text-white rounded-full shadow-2xl"
          style={{backgroundColor:"green"}}>Green</button>

        </div>
      </div>

    </div>

      
  )
}

export default App
