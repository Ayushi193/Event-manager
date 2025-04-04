import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import Profile from './Profile';
import ProfileModa from './ProfileModal';



function  Header () {
   
    const navigate=useNavigate()
    
    const authStatus=useSelector((state)=>state.auth.status)
    const navItem=[
        {
            name:"Home",
            slug:"/",
            active:true,
            
        },
        {
            name:"Hackthons",
            slug:"/hackthons",
            active:true,
        },
        {
            name:"Alumuni",
            slug:"/alumuni",
            active:true,
        }
        
       
       
    ]
    useEffect(()=>{})
    return (
      <div className='w-full bg-slate-500 h-11'>

      <div className='h-full p-4 tex-xs md:text-xl flex gap-3 items-center justify-between '>
        {navItem.map((item)=>(
            item.active? (
                <div key={item.name}>
                <button onClick={()=>{
                    navigate(item.slug)
                }}>{item.name}</button>
            </div>

            ) : (null)
        ))}


       <div className='flex justify-center items-center p-4 gap-2  text-xs md:text-xl'>

       
       {!authStatus && 
        <button onClick={()=>{
            navigate("/login")
        }}>Login or</button>
       }
       
       {!authStatus && 
        <button onClick={()=>{
            navigate("/signup")
        }}>Signup</button>
       }
      
        
       </div>
       {/* {authStatus &&  <Logout/>} */}
       {authStatus && <ProfileModa/>}
       
      </div>

     
        
     </div>
    )
}

export default Header;