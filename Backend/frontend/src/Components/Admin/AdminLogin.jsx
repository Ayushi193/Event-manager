import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import problemservice from '@/services/problemService';
import Spinner from '../Spinner';


function  AdminLogin () {
  const {handleSubmit,register}=useForm()
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()
  const login=async(data)=>{
    console.log(data);
    setLoading(true)
   try {
     const adminData=await problemservice.adminlogin(data)
     localStorage.setItem("adminData",JSON.stringify(adminData))
      navigate("/admin/dashboard")
      setLoading(false)
   } catch (error) {
    setLoading(false)
    throw error

   }
    

  }
    return (
      <div className="w-full mt-6 flex justify-center items-center">

      <div className="w-full md:w-1/4 flex justify-center items-center">
      <form className="space-y-5 bg-slate-100  rounded-md p-10" onSubmit={handleSubmit(login)}>
                  
                  
      <div className="w-full  flex flex-col items-center justify-center">
               <div className='text-black text-2xl font-bold mb-2'> Admin Login</div>  
               <div><Logo/></div>
               </div>
                 
                 <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  className="text-black"
                  {...register("email",{
                      required:true,
                      validate:{
                          matchPattern :(value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                      }
                  })}
                 
                  /> 

               
              

              <Input
                  type="password"
                  placeholder="Enter your password"
                  label="password"
                   className="text-black"
                  {...register("password",{
                      required:true,

                  })}
                  
                  />
               

             <Button type="submit" className="w-full bg-slate-900" >{loading ? (<><Spinner/></>): (<> Login</>)}</Button>

             <p className="mt-2 text-center text-base text-black/60">
                      Don&apos;t have any account?&nbsp;
                      <Link
                          to="/admin/adminsignup"
                          className="font-medium text-primary transition-all duration-200 hover:underline"
                      >
                          Sign Up
                      </Link>
              </p>

            </form>
      </div>
      </div>
    )
}

export default AdminLogin;