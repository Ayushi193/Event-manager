import React, { useCallback, useEffect, useState } from 'react';
import HackthonComp from './HackthonComp';

import { useSelector } from 'react-redux';
import problemservice from '@/services/problemService';

function  Hackthons () {
   const [problems,setProblems]=useState([])
  const userData=JSON.parse(localStorage.getItem("userData"))
   

   const fetchProblems=async()=>{
     const res= await problemservice.getProblems(userData.data.user.college)
      console.log(res);
      setProblems(res.data)

   }

   useEffect(()=>{
   
      
     // console.log(userData?.data.user.college);
   fetchProblems()
    
 
      
       
   },[])
    return (
        <div className='bg-gray-900'>
       {problems.map((p)=>{
       return <HackthonComp {...p}/>
       })}
      </div>
    )
}

export default Hackthons;