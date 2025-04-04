import React, { useCallback, useEffect, useState } from 'react';
import HackthonComp from './HackthonComp';

import { useSelector } from 'react-redux';
import problemservice from '@/services/problemService';

function  Hackthons ({college}) {
   const [problems,setProblems]=useState([])
  const userData=JSON.parse(localStorage.getItem("userData"))
   

   const fetchProblems=async(college)=>{
    console.log(college);
    
    var colle=userData?.data.user.college || college
     const res= await problemservice.getProblems(colle)
      console.log(res);
      setProblems(res.data)

   }

   useEffect(()=>{
   console.log(college);
   
      
     // console.log(userData?.data.user.college);
   fetchProblems(college)
    
 
      
       
   },[])


    
    return userData ? (
        <div className='bg-gray-900'>
       {problems.map((p)=>{
       return <div key={p._id}> <HackthonComp {...p}/></div>
       })}
      </div>
    ) : ( <div className="w-full mt-6 flex justify-center items-center">

      <div className="w-full flex justify-center items-center">
      <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
        <span className="text-cyan-400">Please Login </span>
      </h1>
      </div>
      </div>
      </div>)
}

export default Hackthons;