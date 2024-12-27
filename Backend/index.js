import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/db/connectDB.js";
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express();
dotenv.config({
    path:"./.env"
})

connectDB()

  var corsOptions = {
    origin: process.env.CORS_URL,
     methods:[ 'GET, POST, PUT, DELETE, OPTIONS'],
     credentials:true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  

app.use(cors(corsOptions))

app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.json({limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from "./src/routes/user.routes.js"

app.use("/api/v1/users",userRouter)


app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is listening to the port http://localhost:${process.env.PORT}`)
})
app.get("/",(req,res)=>{
    res.send("Server is ready")
})