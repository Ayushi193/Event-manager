import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/db/connectDB.js";
const app=express();
dotenv.config()


const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is listening to the port http://localhost:${PORT}`)
})
app.get("/",(req,res)=>{
    res.send("Server is ready")
})

connectDB()