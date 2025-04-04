import problemservice from '@/services/problemService';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SolutionInfo from './SolutionInfo';

function  SolutionPage () {
      const {id}=useParams()
    const [solutions,setSolutions]=useState([])
    const fetchSolutions=async()=>{
        
        
       const solutions=await problemservice.getSolutions({problemId:id})
       console.log(solutions);
       
       setSolutions(solutions.data.data)
       console.log(solutions.data.data);
       
       
    }

    useEffect(()=>{
        fetchSolutions()
    },[])

    return (
      <div>
       {solutions.map((s)=>(
        <div key={s._id}>
          <SolutionInfo username={s.user.username} userId={s.user._id}/>
        </div>
       ))}
     </div>
    )
}

export default SolutionPage;