import problemservice from '@/services/problemService';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SolutionCard } from './solution-card';



function  SubmittedSol () {
  const {userId}=useParams()
  const [solutions,setSolutions]=useState([])
   const [loading,setLoading]=useState(false)

 
  const fetchSolutions=async()=>{    
    console.log(userId);
    setLoading(true)
    const res= await problemservice.getSolbyId(userId)
    const solutions=res.data.data
    setSolutions(solutions)
    console.log(solutions);
    setLoading(false)
    
  
    }

    useEffect(()=>{
     
     fetchSolutions()
     console.log(solutions);
     
     
    },[])

    



return (
   <div>
     {loading ? (<>loading</>) : (<>
      <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row items-center justify-center p-4">
    <SolutionCard
    title={solutions[0]?.title}
    description={solutions[0]?.solutionDescription}
    videoLink={solutions[0]?.videoLink}
    githubLink={solutions[0]?.githubLink}
    
    />
    </div>
     </>)}
   </div>
 
  
    
  )
}

export default SubmittedSol;