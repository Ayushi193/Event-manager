import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";



const Login=() =>{
  
        const {handleSubmit,register}=useForm()

        const login=async(data)=>{
          console.log(data);
          
        }

   
   
    return(
        <>

<form onSubmit={handleSubmit(login)}>
                    

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

            <Button type="submit" className="w-full" >Create Account</Button>

          </form>
        </>
    )
}

export default Login