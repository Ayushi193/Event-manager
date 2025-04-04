import mongoose, { Schema, Types } from "mongoose";

const SolutionSchema=new Schema({
    title:{
        required:true,
        type:String
    },
    githubLink:{
        required:true,
        type:String
    },
    videoLink:{
        required:true,
        type:String
    },
    solutionDescription:{
        required:true,
        type:String
    },
    problem:{
        type:Schema.Types.ObjectId,
        ref:"Problem"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        unique:true,
    }

})

export const Solution=mongoose.model("Solution",SolutionSchema)