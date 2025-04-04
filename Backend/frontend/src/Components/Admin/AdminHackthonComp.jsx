import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../TImer';

function  AdminHackthonComp ({time,_id,title}) {
      const [active,setActive]=useState(true)
      const [open,setopen]=useState(false)
      const navigate=useNavigate()
     
      useEffect(()=>{
        
        console.log(_id);
        
        
          
      },[])
      return (
        <div className='flex mt-2  items-center justify-center text-white'>
         <button 
         className='w-full flex items-center justify-center'
         onClick={()=>{
          navigate(`/admin/hackthons/${_id}`)
         }}
         >
         <div className='bg-slate-600 w-full m-2 md:m-0 md:w-1/2 rounded-lg h-12 flex items-center justify-evenly '>
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

export default AdminHackthonComp;