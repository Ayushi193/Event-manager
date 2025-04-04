import React from 'react';
import  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function  SolutionInfo ({username,userId}) {
  const {id}=useParams()
    const [active,setActive]=useState(true)
    const [open,setopen]=useState(false)
    const navigate=useNavigate()

    return (
        <div className='flex mt-2  items-center justify-center text-white'>
        <button 
        className='w-full flex items-center justify-center'
        onClick={()=>{
         navigate(`/admin/hackthons/${id}/${userId}`)
        }}
        >
        <div className='bg-slate-600 w-1/2 rounded-lg h-12 flex items-center justify-evenly '>
         <div>
         { username ? (<>
            <span >{username}</span>
           </>) : (null) }
         </div>
         </div>
        
        </button>
      </div>
    )
}

export default SolutionInfo;