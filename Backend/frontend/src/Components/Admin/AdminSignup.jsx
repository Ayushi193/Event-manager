import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../Logo';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Dropdown from '../Dropdown';
import { colleges } from '../colleges';
import problemservice from '@/services/problemService';
import Spinner from '../Spinner';
import { useNavigate } from 'react-router-dom';

function  AdminSignup () {
   const {register,handleSubmit}=useForm()
   const [college,setCollege]=useState("")
   const [loading,setLoading]=useState(false)
   const navigate=useNavigate()
   const create=async(data)=>{

     try {
        setLoading(true)
      const adminData=await problemservice.adminregister( {
            fullName:data.name,
            email:data.email,
            college:college,
            password:data.password, 
         } )
         console.log(adminData);
         localStorage.setItem("adminData",JSON.stringify(adminData))
         navigate("/admin/dashboard")
         setLoading(false)
        } catch (error) {
            setLoading(false)
            throw error
   }
  
  
  }

   const handleSelect = (selectedOption) => {
    console.log("Selected College:", selectedOption);
    setCollege(selectedOption)
    
    
  }

    return (
      <div className='w-full mt-6 flex justify-center items-center'>
      <div className="w-full m-1 md:w-2/4 flex justify-center items-center">
       <form className="space-y-5 bg-slate-100  rounded-md p-10" onSubmit={handleSubmit(create)}>
                  
               <div className="w-full  flex flex-col items-center justify-center">
               <div className='text-black text-2xl font-bold mb-2'> Admin Register</div>  
               <div><Logo/></div>
               </div>

                  <Input
                   label="FullName"
                   placeholder="Enter your name"
                   {...register("name",{
                      required:true
                   })}
                  
                  
                  /> 

                  <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
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
                  {...register("password",{
                      required:true,

                  })}
                  
                  />
                 
                 <div className="p-6">
                   <h1 className="text-2xl text-black font-bold mb-4">Engineering Colleges</h1>
                      <Dropdown options={colleges} onSelect={handleSelect} />
                  </div>

                  <Button type="submit" className="w-full bg-slate-900" >{loading ? (<><Spinner/></>): (<> Create Account</>)}</Button>




              </form>

          
      
              </div>
              </div>
    )
}

export default AdminSignup;