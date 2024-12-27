import mongoose from "mongoose";
import { DB_NAME } from "../constants/const.js";

const connectDB=async()=>{
       
       
    try {
        const insatance=await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`) 
        console.log(`Database Connected ${insatance.connection.host}`);
    
    } catch (error) {
        console.log("Mongo DB Connection error",error);
        process.exit(1);
        
    }

}

export default connectDB