import React, { useEffect, useState } from 'react';
import Timer from './TImer';

import { useNavigate } from 'react-router-dom';


function  HackthonComp ({time,_id,title}) {

    const [active,setActive]=useState(true)
    const [open,setopen]=useState(false)
    const navigate=useNavigate()
   
    useEffect(()=>{
      console.log(time);
      
      
        
    },[])
    return (
      <div className='flex mt-2  items-center justify-center text-white'>
       <button 
       className='w-full flex items-center justify-center'
       onClick={()=>{
        navigate(`/hackthons/${_id}`)
       }}
       >
       <div className='bg-slate-600 w-1/2 rounded-lg h-12 flex items-center justify-evenly '>
        <div>
        { title ? (<>
           <span >{title}</span>
          </>) : (null) }
        </div>
        <div><Timer time={time}/></div>
        <div> {active ? (<div  className='bg-green-500 rounded-full h-3 w-3'></div>) : (<div className='bg-red-600 rounded-full h-3 w-3'></div>)} </div>
        </div>
       
       </button>
     </div>
    )
}

export default HackthonComp;