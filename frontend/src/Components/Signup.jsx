import React from 'react';
import service from '@/sevices/authService';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Button } from './ui/button';


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
     <>
         <form onSubmit={handleSubmit(create)}>
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

                    <Button type="submit" className="w-full" >Create Account</Button>


                </form>

            
        
                </>
    )
}

export default Signup;