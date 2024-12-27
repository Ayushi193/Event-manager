import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { Outlet } from "react-router-dom"
import ProblemsPage from './Components/ProblemsPage'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './store/authSlice'
import Modal from './Components/Modal'
import Profile from './Components/Profile'

function App() {
  const dispatch=useDispatch() 
  
  useEffect(()=>{
   const userData=JSON.parse(localStorage.getItem("userData"))
    if(userData){
      dispatch(login({userData:userData}))
    }
  },[])
  

  return (
 
   <div className='w-full min-h-screen bg-slate-800'>
     
      <Header/>
      <main>
      <Outlet/>
      </main>
     <Footer/>

     {/* <ProblemsPage/> */}

    </div>
  )
}

export default App
