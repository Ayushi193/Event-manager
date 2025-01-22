import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { Outlet, useNavigate } from "react-router-dom"
import ProblemsPage from './Components/ProblemsPage'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './store/authSlice'
import Modal from './Components/Modal'
import Profile from './Components/Profile'

function App() {
  const dispatch=useDispatch() 
  const navigate=useNavigate()
  
  useEffect(()=>{
   const userData=JSON.parse(localStorage.getItem("userData"))
    if(userData){
      dispatch(login({userData:userData}))
    }else{
      navigate("/login")
    }
  },[])
  

  return (
 
   <div className='w-full flex flex-col min-h-screen bg-gray-900 text-gray-100'>
     
      <Header/>
      <main className="flex-grow">
      <Outlet/>
      </main>
     <Footer/>
     

     {/* <ProblemsPage/> */}

    </div>
  )
}

export default App
