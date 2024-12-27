import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Login from './Components/Login'
import Signup from './Components/Signup'
import store from './store/store'
import Home from './Components/Home'
import Hackthons from './Components/Hackthons'
import HackthonComp from './Components/HackthonComp'
import ProblemsPage from './Components/ProblemsPage'



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
      },
      {
        path:"/hackthons",
        element:<Hackthons/>
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/hackthons/:id",
        element:<ProblemsPage/>
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
  </StrictMode>,
)
