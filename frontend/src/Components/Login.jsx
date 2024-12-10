

import { useState } from "react";

const signupIntialValues={
    username:'',
    password:''
}
const Login=() =>{
    
   const[account,setAccount]=useState("login")
   const [signup,setSignup]=useState('signupIntialValues');
   const toggleSignup =() =>{
   account==="signup"?  setAccount("login") : setAccount("signup")
   }
   const onInputChange =(e) =>{
setSignup({...signup,[e.target.name]:e.target.value})
   }
   
    return(
        
        
        account==="login" ?
        <form>
        <div className="mb-3" >
            
            <lable> Name:</lable>
        <input  className="form-control" placeholder="enter your name"  type="name"/>
        </div>
        
        <div className="mb-3" >
        <lable >Password:</lable>
        <input   className="form-control" placeholder="enter your passsword" type="password"/>
        </div>
        
        
        <button  type="submit" className=" btn  btn-primary mt-3">Login</button>
        <p>OR</p>
        <button onClick={()=>toggleSignup()} className="btn btn-primary">Create an account</button>
        
        
</form>
        
    
:


<form>
<div className=" mb-3" >
<lable className="form-lable"> Name:</lable>
    
        <input   className="form-control" placeholder="enter your name" type="name"/>
    
        </div>
        <div className=" mb-3" >
        <lable > Email:</lable>
        <input   className="form-control" placeholder="enter your email" type="email"/>
        </div>
        
<div className=" mb-3" >
<lable > Password:</lable>
        <input className="form-control" placeholder="enter your password" type="password"/>
        </div>
        

<button  type="submit" className="btn  btn-primary mt-2">Signup</button>
<p>OR</p>
<button onClick={()=>toggleSignup()} className="btn btn-primary" >Already have an account</button>
</form>

        )
        }
    
    

export default Login;
