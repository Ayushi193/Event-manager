import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'

import Login from './Components/Login'
import Signup from './Components/Signup'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
