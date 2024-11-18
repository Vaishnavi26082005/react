import React from 'react'
// import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const auser = "  chai peeo";
const reactEle=React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'click me to visit',
  auser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App/>
  {reactEle}
  </>

)
