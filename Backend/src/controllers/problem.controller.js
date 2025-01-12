import { asynchandler } from "../utils/asynchandler.js";
import { API_ERROR } from "../utils/ApiError.js";
import { Problem } from "../models/problem.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const problemstatement=asynchandler(async(req,res)=>{

   const {title,description,time,status}=req.body

   if([title,description,time,status].some((field)=>field?.trim()==="")){
      throw new API_ERROR(400,"enter all fields")

   }

   const problems=await Problem.create({
      title,
      description,
      time,
      status
   })

   if(!problems){
      throw new API_ERROR(500,"problems statement not created")
   }


   res.status(200).json(new ApiResponse(200,"Problem statement created sucessfully",problems))
 
})

const getProblems=asynchandler(async(req,res)=>{
    
  const activeproblems= await Problem.aggregate([
      {
         $match:{
            status:true
         }
      }
   ])

   if(!activeproblems){
      throw new API_ERROR(500,"Failed to fetch Problem")
   }

   res.status(200).json(new ApiResponse(200,"ACtive Problem fetched",activeproblems))

})


export {
   problemstatement,
   getProblems
}
