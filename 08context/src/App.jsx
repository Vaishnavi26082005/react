import { useState } from 'react'

import './App.css'
import UserContext from './context/usercontext'
import UserContextProvider from './context/Usercontextprovider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>User Authentication</h1>
     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}

export default App
