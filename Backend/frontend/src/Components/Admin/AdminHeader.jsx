import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, LogOut,Home } from "lucide-react"
import clsx from "clsx";
function  AdminHeader () {

    const navigate=useNavigate()

    const logout=async()=>{
            localStorage.removeItem("adminData")
           
            navigate("/")
        }
    return (
        <>
        <header className="w-full border-b">
          <div className="container min-w-full gap-2 md:gap-0 mx-auto px-4 py-4 flex md:justify-between md:items-center">
          <Button className="p-1 md:p-2 text-black" variant="outline"
              size="sm md:default" 
              onClick={()=>{
                navigate("/admin/dashboard")
              }}
              >
               <Home/> 
               Home
              </Button>
            <h1 className="hidden md:block  text-xs md:text-3xl font-bold">Hackathon Admin</h1>
            <div className="flex space-x-2">
              <Button className="text-black p-1 md:p-4" variant="outline" 
               size={clsx("sm", "md:default")}
              onClick={()=>{
                navigate("/admin/create")
              }}

             
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Problem
              </Button>
              <Button variant="ghost" onClick={logout} >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </header>
        </>
        
      
    )
}

export default AdminHeader;