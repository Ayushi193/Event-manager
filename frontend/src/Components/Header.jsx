import React from 'react';
import { useNavigate } from 'react-router-dom';

function  Header () {
    const navigate=useNavigate()
    const navItem=[
        {
            name:"Home",
            slug:"/",
            
        },
        {
            name:"Explore",
            slug:"/explore"
        },
        {
            name:"Sign In",
            slug:"/login"
        },
        {
            name:"Sign Up",
            slug:"/signup"
        }
    ]
    return (
      <div className='w-full bg-slate-500 h-11'>

      <div className='h-full flex items-center justify-evenly '>
        {navItem.map((item)=>(
            <div key={item.name}>
                <button onClick={()=>{
                    navigate(item.slug)
                }}>{item.name}</button>
            </div>
        ))}
      </div>
        
     </div>
    )
}

export default Header;