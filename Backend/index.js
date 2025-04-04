import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/db/connectDB.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import path from "path"
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

//user routes
import userRouter from "./src/routes/user.routes.js"

app.use("/api/v1/users",userRouter)

//problems routes
import problemRouter from "./src/routes/problems.routes.js"
app.use("/api/v1/problems",problemRouter)
//admin routes
import adminRouter from "./src/routes/admin.routes.js"
app.use("/api/v1/admin",adminRouter)


app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is listening to the port http://localhost:${process.env.PORT}`)
})
// app.get("/",(req,res)=>{
//     res.send("Server is ready")
// })

// ---------Deployment Code---------
const _dirname1=path.resolve();
if(process.env.NODE_ENV==="development"){
  console.log(process.env.NODE_ENV);
  
  app.use(express.static(path.join(_dirname1,"frontend/dist")))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(_dirname1,"frontend","dist","index.html"))
  })

}else{

app.get("/", (req, res) => {
  res.send("server is ready");
});

}
//------------------------------------------------