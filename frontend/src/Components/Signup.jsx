import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Logo from './Logo';
import service from '@/services/authService';
import Dropdown from './Dropdown';
import { colleges } from './colleges';



function  Signup () {
    const {register,handleSubmit}=useForm()
    const [college,setCollege]=useState("")
    const create=async(data)=>{
        console.log(college);
        
       console.log(data);
     const res= await service.createAccount({
        fullName:data.name,
        username:data.username,
        email:data.email,
        college:college,
        password:data.password,
        avatar:data.avatar?.[0]
       })
       console.log(res);
       
    }

    const handleSelect = (selectedOption) => {
        console.log("Selected College:", selectedOption);
        
        
      };
    return (

        <div className='w-full mt-6 flex justify-center items-center'>
        <div className="w-2/4 flex justify-center items-center">
         <form className="space-y-5 bg-slate-100  rounded-md p-10" onSubmit={handleSubmit(create)}>
                          
                 <div className="w-full flex items-center justify-center">
                 <Logo/>
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
                    type="text"
                    placeholder="Enter your username"
                    label="username"
                    {...register("username",{
                        required:true,

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
                    <Input
                    type="file"
                    placeholder="Upload your pic"
                    {...register("avatar",{
                        required:true,
                    })}
                    />

                   <div className="p-6">
                     <h1 className="text-2xl text-black font-bold mb-4">Engineering Colleges</h1>
                        <Dropdown options={colleges} onSelect={handleSelect} />
                    </div>

                    <Button type="submit" className="w-full bg-slate-900" >Create Account</Button>




                </form>

            
        
                </div>
                </div>
    )
}

export default Signup;