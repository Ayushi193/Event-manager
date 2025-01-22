import { asynchandler } from "../utils/asynchandler.js";
import { API_ERROR } from "../utils/ApiError.js";
import { Problem } from "../models/problem.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { logOutAdmin } from "./admin.controllers.js";
import { Admin } from "../models/admin.model.js";


const problemstatement=asynchandler(async(req,res)=>{

   const {title,description,time,status}=req.body
 
   
   const college=req.admin

   if([title,description,status].some((field)=>field?.trim()==="")){
      throw new API_ERROR(400,"enter all fields")

   }

   const problemstatement=await Problem.create({
      title,
      description,
      time,
      status,
      college
   })

  const problems= await Problem.findOne({_id:problemstatement._id})
  .populate("college","-password")

   if(!problems){
      throw new API_ERROR(500,"problems statement not created")
   }


   res.status(200).json(new ApiResponse(200,"Problem statement created sucessfully",problems))
 
})

const getProblems=asynchandler(async(req,res)=>{
      const {collegeName}=req.body
     
      
  var activeproblems= await Problem.aggregate([
        {
          $lookup: {
            from: "admins",
            localField: "college",
            foreignField: "_id",
            as: "s",
          }
         },
      
      {
         $addFields: {
            college:{
              $first:"$s"
            }
         }
       },
       {
         $match: {
          "college.college": collegeName
         }
       }
     
   ])

  
 activeproblems=await Admin.populate(activeproblems,{
   path:"college",
   select:"college"
 })

   

  
   if(!activeproblems){
      throw new API_ERROR(500,"Failed to fetch Problem")
   }

   res.status(200).json(new ApiResponse(200,"ACtive Problem fetched",activeproblems))

})


export {
   problemstatement,
   getProblems
}
