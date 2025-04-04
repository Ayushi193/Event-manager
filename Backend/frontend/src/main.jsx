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
import AdminSignup from './Components/Admin/AdminSignup'
import AdminLogin from './Components/Admin/AdminLogin'
import Dashboard from './Components/Admin/Dashboard'
import SolutionPage from './Components/Admin/SolutionsPage'
import SubmittedSol from './Components/Admin/SubmittedSol'
import CreateProblem from './Components/Admin/CreateProblem'
import { Toaster } from "@/components/ui/toaster"
import Alumuni from './Components/Alumuni'



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
      },
      {
        path:"admin/adminsignup",
        element:<AdminSignup/>
      }
      ,
      {
        path:"admin/adminLogin",
        element:<AdminLogin/>
      },
      {
        path:"/admin/dashboard",
        element:<Dashboard/>
      }
      ,{
        path:"/admin/hackthons/:id",
        element:<SolutionPage/>
      },
      {
       path:"/admin/hackthons/:id/:userId",
       element:<SubmittedSol/>
      },
      {
       path:"/admin/create",
       element : <CreateProblem/>
      },
      {
        path:"/alumuni",
        element:<Alumuni/>
      }

      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <Toaster/>
   <RouterProvider router={router}/>
   </Provider>
  
)
