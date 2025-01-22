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
    },
    college:{
        
        type:Schema.Types.ObjectId,
        ref:"Admin"
    }
    
})


export const Problem=mongoose.model("Problem",problemSchema)