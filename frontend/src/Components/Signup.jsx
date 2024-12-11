import React from 'react';
<<<<<<< HEAD
=======
import service from '@/services/authService.js';
>>>>>>> d901c78fd7156e89cc898c65e69a4cd8ceb9e8db
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Logo from './Logo';
import service from '@/services/authService';


function  Signup () {
    const {register,handleSubmit}=useForm()
    const create=async(data)=>{
       console.log(data);
     const res= await service.createAccount({
        fullName:data.name,
        username:data.username,
        email:data.email,
        password:data.password,
        avatar:data.avatar?.[0]
       })
       console.log(res);
       
    }
    return (
<<<<<<< HEAD

        <div className='w-full mt-6 flex justify-center items-center'>
        <div className="w-2/4 flex justify-center items-center">
         <form className="space-y-5 bg-slate-100  rounded-md p-10" onSubmit={handleSubmit(create)}>
                          
                 <div className="w-full flex items-center justify-center">
                 <Logo/>
                 </div>

=======
     <>
     <h2>Signup</h2>
         <form onSubmit={handleSubmit(create)}>
>>>>>>> d901c78fd7156e89cc898c65e69a4cd8ceb9e8db
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

                    <Button type="submit" className="w-full bg-slate-900" >Create Account</Button>


                </form>

            
        
                </div>
                </div>
    )
}

export default Signup;