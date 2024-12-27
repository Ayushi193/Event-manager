import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import Logo from "./Logo";
import service from "@/services/authService";
import { useDispatch } from "react-redux";
import { login as authLogin } from "@/store/authSlice";
import { Link, useNavigate } from "react-router-dom";


const Login=() =>{
  
        const {handleSubmit,register}=useForm()
        const navigate=useNavigate()
        const dispatch=useDispatch()
        const login=async(data)=>{
          console.log(data);
          const session= await service.login(data)

          if(session){
           navigate("/")
            
          }

         localStorage.setItem("userData",JSON.stringify(session))
         dispatch(authLogin({userData:session}))
         
 
        }

   
   
    return(
      <div className="w-full mt-6 flex justify-center items-center">

        <div className="w-1/4 flex justify-center items-center">
        <form className="space-y-5 bg-slate-100  rounded-md p-10" onSubmit={handleSubmit(login)}>
                    
                    
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

               <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            to="/signup"
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

export default Login