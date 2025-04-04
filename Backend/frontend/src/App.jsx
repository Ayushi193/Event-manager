import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './store/authSlice'
import AdminHeader from './Components/Admin/AdminHeader'
import Dashboard from './Components/Admin/Dashboard'


function App() {
  const dispatch=useDispatch() 
  const navigate=useNavigate()
 const userData=JSON.parse(localStorage.getItem("userData"))
 const adminData=JSON.parse(localStorage.getItem("adminData"))

  
  useEffect(()=>{
   
    if(userData){
      dispatch(login({userData:userData}))
    }else if(adminData){
      console.log(adminData);
      navigate("/admin/dashboard")
        
    }
  },[])

 
  return !adminData ? (
  
    <div className='w-full flex flex-col min-h-screen bg-gray-900 text-gray-100'>
   
    <Header/>
    <main className="flex-grow">
    <Outlet/>
    </main>
   <Footer/>
   

   {/* <ProblemsPage/> */}

  </div>
  
):(
     <div className='w-full min-h-screen flex flex-col  bg-gray-900 text-gray-100'>
     <AdminHeader/>
     
     <main className='flex-grow'>
      <Outlet/>
     </main>
     </div>
    
)
 



}
export default App
