import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, LogOut } from "lucide-react"
import AdminHeader from './AdminHeader';
import Hackthons from '../Hackthons';
import AdminHackthon from './AdminHackthon';

function  Dashboard () {
  const navigate=useNavigate()
  const adminData=JSON.parse(localStorage.getItem("adminData"))

  useEffect(()=>{
    console.log(adminData);
    
  },[])

  const logout=async()=>{
          localStorage.removeItem("adminData")
          localStorage.setItem("loading",false)
          navigate("/")
      }
    return (
     <>
       <div>
      <div className="container mt-5 mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Welcome to Admin Panel <span className="text-cyan-400">HackNova</span> {adminData ? (<>of {adminData?.data.admin.college}</>) : (<></>)}
        </h1>
        </div>
       
        </div>
      <AdminHackthon college={adminData.data.admin.college}/>
     </>
    )
}

export default Dashboard;