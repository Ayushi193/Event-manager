import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import RTE from './RTE';
import { Button } from '@/components/ui/button';
import Spinner from '../Spinner';
import { useForm } from 'react-hook-form';
import problemservice from '@/services/problemService';

function  CreateProblem () {
  const {register,handleSubmit,getValues,control}=useForm()
  const adminData=JSON.parse(localStorage.getItem("adminData"))
  const [loading,setLoading]=useState(false)

  const submit=async(data)=>{
    try {
      setLoading(true)
       console.log(data,"data");
       await problemservice.problemStatement(data,adminData)
       setLoading(false)
       control._reset()
    } catch (error) {
      setLoading(false)
      control._reset()
      throw error
    }
     
  }

    return (
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
     <div className='w-full flex align-center justify-center'>
     <div className="w-full md:w-1/2 px-2 mt-5 text-white">
          <Input
              className="mb-4 text-white"
              label="Title :"
              placeholder="Title"
              {...register("title", { required: true })}
          />
          <Input
              label="Time :"
              placeholder="Time in Hrs"
              className="mb-4 text-white"
              {...register("time", { required: true })}
             
          />
          <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />

          <Button className="w-full mt-4">
            {loading ? (<><Spinner/></>): (<> Submit</>)}
           
          </Button>
      </div>
     </div>
     
  </form>
  )
    
}

export default CreateProblem;