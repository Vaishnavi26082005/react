import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from './Components/Home/home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/ContactUs/Contact.jsx';
import User from './Components/User/user.jsx';
import Instagram from './Components/Instagram/instagram.jsx';


// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {path:"",
//       element:<Home/>
//     },
//     {path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='instagram' element={<Instagram/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
