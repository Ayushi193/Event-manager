import mongoose, { Schema } from "mongoose";

const problemSchema=new Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
       type:String
    },
    time :{
       required:true,
        type:String
    },
    status:{
        required:true,
        type:Boolean
    }
    
})


export const Problem=mongoose.model("Problem",problemSchema)