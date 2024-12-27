import React, { useEffect, useState } from 'react';
import HackthonComp from './HackthonComp';
import { problems as a} from './problems';

function  Hackthons () {
   const [problems,setProblems]=useState([])
   useEffect(()=>{
       setProblems(a)
      
       
   },[])
    return (
      <div>
       {problems.map((p)=>{
       return <HackthonComp {...p}/>
       })}
     </div>
    )
}

export default Hackthons;