import React, { useEffect, useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Code,BookText,GithubIcon } from 'lucide-react';
import Description from './Description';
import { problems } from './problems';
import { useParams } from 'react-router-dom';


function  ProblemsPage () {
  const {id}=useParams()
  const [description,setDescription]=useState()
  
  useEffect(()=>{
     console.log(id);
     problems.map((p)=>{
      console.log(p.id);
      
      if(p.id===id){
        setDescription(p.description)
      }
     })
    console.log(description);
    
     
  },[])
   
    return (
        
        <div className='w-full h-screen bg-slate-800 flex'>
        <div className='w-1/2 bg-slate-700 h-[99%] border m-2 border-slate-300 text-white rounded-md'>
         <div className='w-full bg-slate-800 h-9 flex gap-1 p-2 rounded-md'><BookText/>Description</div>
         <div className='w-full h-[900px]'>
         <ScrollArea className="h-[900px] w-full overflow-y-auto ">
             {description}
            </ScrollArea>
         </div>
        
        </div>
        
        <div className='w-1/2 h-full  bg-slate-800'>
          <div className='h-[48%] border m-2 border-slate-300 rounded-md bg-slate-700 text-white'> 
            <div className='w-full flex gap-1 bg-slate-800 h-9 p-2 rounded-md'><Code/>Solution Description </div>
            <div className='w-full h-[400px]'>
                <ScrollArea className="h-[400px] w-full">
                
                </ScrollArea>
            </div>
            </div>
          <div className='h-1/2 border m-2 border-slate-300 rounded-md  bg-slate-700 text-white'>
          
          <div className='w-full bg-slate-800 flex gap-1 h-9 p-2 rounded-md'><GithubIcon/>Github Repository Link</div>
          <div className='w-full h-[400px]'>
                <ScrollArea className="h-[400px] w-full">
                
                </ScrollArea>
            </div>
          </div>
        </div>
      </div>
       
    )
}

export default ProblemsPage;