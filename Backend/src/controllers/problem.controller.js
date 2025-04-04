import { asynchandler } from "../utils/asynchandler.js";
import { API_ERROR } from "../utils/ApiError.js";
import { Problem } from "../models/problem.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { logOutAdmin } from "./admin.controllers.js";
import { Admin } from "../models/admin.model.js";
import { Solution } from "../models/solution.model.js";
import mongoose from "mongoose";
import { User } from "../models/user.model.js";


const problemstatement=asynchandler(async(req,res)=>{

   const {title,description,time,status}=req.body
 
   
   const college=req.admin

   if(!status){
      throw new API_ERROR(400,"enter all fields")
   }

   if([title,description,time].some((field)=> field?.trim()==="")){
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
      throw new API_ERROR(500,"Failed to create problem statement")
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
const createsolutions=asynchandler(async(req,res)=>{

   const {githubLink,title,videoLink,solutionDescription,problem}=req.body

  const user=req.user
    
   if([githubLink,title,videoLink,solutionDescription].some((field)=>field?.trim()==="")){
      throw new API_ERROR(400,"Please provide all the fields")
   }
   const getsol=await Solution.findOne({
      user : user
   })
   if(getsol){
   throw new API_ERROR(400,"Solution already submitted")
    }

   const solution=await Solution.create({
      githubLink,
      videoLink,
      solutionDescription,
      problem,
      title,
      user
   })

   

   if(!solution){
      throw new API_ERROR(400,"something went wrong while creating the solution")
   }

   res.status(201).json(new ApiResponse(200,"Solution created successfully",solution))




})
const getsolutions=asynchandler(async(req,res)=>{
    const {problemId}=req.body
     
     
    if(!problemId){
      throw new API_ERROR(400,"problemId is not there")
    }

   var solution=await Solution.aggregate([
      {
         $match:{
            problem:new mongoose.Types.ObjectId(problemId)
         }
      }
    ])
   
   solution=await User.populate(solution,{
      path:"user",
      select:"username"
   })
    
    if(!solution){
      throw new API_ERROR(400,"Problem in fetching the solution")
    }

    res.status(200).json(new ApiResponse(200,"Solutions fetched",solution))
   

    
})

const getSolbyUserId=asynchandler(async(req,res)=>{
   const {userId}=req.body
   
   
  const solution= await Solution.aggregate([
      {
         $match:{
            user : new mongoose.Types.ObjectId(userId)
         }
      }
   ])
  
   

   if(!solution){
      throw new API_ERROR(400,"something went wrong while fetching the solution")
   }

   res.status(201).json(new ApiResponse(200,"Solution fetched sucessfully",solution))
})


export {
   problemstatement,
   getProblems,
   createsolutions,
   getsolutions,
   getSolbyUserId
}
