import React, { useCallback, useEffect, useState } from 'react';
import AdminHackthonComp from './AdminHackthonComp';
import problemservice from '@/services/problemService';


function  AdminHackthon ({college}) {
   const [problems,setProblems]=useState([])
  const adminData=JSON.parse(localStorage.getItem("adminData"))
   

   const fetchProblems=async(college)=>{
     const res= await problemservice.getProblems(college)
      console.log(res);
      setProblems(res.data)

   }

   useEffect(()=>{
   console.log(college);
   
      
     // console.log(userData?.data.user.college);
   fetchProblems(college)
    
 
      
       
   },[])
    return  (
        <div className='bg-gray-900'>
       {problems.map((p)=>{
       return <div key={p._id}><AdminHackthonComp {...p}/></div>
       })}
      </div>
    )
}



export default AdminHackthon;