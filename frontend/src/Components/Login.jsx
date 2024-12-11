import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
<<<<<<< HEAD
import Logo from "./Logo";
import { isValidElement } from "react";
=======
import login from "@/services/authLogin.js"
>>>>>>> d901c78fd7156e89cc898c65e69a4cd8ceb9e8db



const Login=() =>{
  
        const {handleSubmit,register}=useForm()

        const login=async(data)=>{
          console.log(data);
          
        }

   
   
    return(
<<<<<<< HEAD
      <div className="w-full mt-6 flex justify-center items-center">

        <div className="w-1/4 flex justify-center items-center">
        <form className="space-y-5 bg-slate-100  rounded-md p-10" onSubmit={handleSubmit(login)}>
=======
        <>
<h2>Login</h2>
<form onSubmit={handleSubmit(login)}>
>>>>>>> d901c78fd7156e89cc898c65e69a4cd8ceb9e8db
                    
                    
                 <div className="w-full flex items-center justify-center">
                 <Logo/>
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
                 

               <Button type="submit" className="w-full bg-slate-900" >Login</Button>

              </form>
        </div>
        </div>
    )
}

export default Login