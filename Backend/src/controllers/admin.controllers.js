import { asynchandler } from "../utils/asynchandler.js";
import { API_ERROR } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Admin } from "../models/admin.model.js";

const registerAdmin=asynchandler(async(req,res)=>{
    const {fullName, email, password } = req.body
    //console.log("email: ", email);

    if (
        [fullName, email, password].some((field) => field?.trim() === "")
    ) {
        throw new API_ERROR(400, "All fields are required")
    }

   const existedUser= await Admin.findOne({email})

   if(existedUser){
    throw new API_ERROR(500,"Admin already exists")
   }

  const admin = await Admin.create({
    fullName,
    email,
    password
   })

   if(!admin){
    throw new API_ERROR(500,"Failed to create Admin")

   }


   res.status(201).json(new ApiResponse(200,"Admin created Sucessfully",admin))


})

const loginAdmin=asynchandler(async(req,res)=>{


    const {email,password}=req.body
    
    const generateAccessTokenAndRefreshToken=async(userId)=>{
       try {
    
            const admin=await Admin.findById(userId)
            const accessToken=admin.generateAccessToken()
            const refreshToken=admin.generateRefreshToken()
    
            admin.refreshToken=refreshToken
          await   admin.save({validateBeforeSave: false})
    
            return {accessToken,refreshToken}
        
       } catch (error) {
    
        throw new API_ERROR(500,"Something went wrong while registering the user")
        
       }
    
    
    
    
    }
    
    
    if(!email){
        throw new API_ERROR(400,"Username or email is required")
    
    }
    
    
    
    const admin=await Admin.findOne({
       email
    })
    
    console.log(admin);
    
    if(!admin){
        throw new API_ERROR(404,"User does not exist")
    }
    
    
    const isPasswordValid=await admin.isPasswordCorrect(password)
    if(!isPasswordValid){
       throw new API_ERROR(401,"Invalid User credintials")
    }
    
    
    const {accessToken,refreshToken}=await generateAccessTokenAndRefreshToken(admin._id)
    
    const loggedInUser=await Admin.findById(admin._id).select("-password -refreshToken")
    
    
    const options={
        httpOnly:true,
        secure:true
    }
    
    
    return res.status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
             "User Logged In Sucessfully",
            {
                admin:loggedInUser,
                refreshToken,
                accessToken
    
            }
    
           
        
        )
    
    )

})

const logOutAdmin=asynchandler(async(req,res)=>{
 
    
    
   
   

  const hola= await Admin.findByIdAndUpdate(req.admin._id,
        {
            $set:{
                refreshToken:undefined
            }

       },
       {
        new :true
       }
)





const options={
    httpOnly:true,
    secure:true
}


return res
.status(200)
.clearCookie("accessToken",options)
.clearCookie("refreshToken",options)
.json(
    new ApiResponse(
        200,
        {},
        "Admin Logged out Sucessfully"
    )

)

})


export {
    registerAdmin,
    loginAdmin,
    logOutAdmin
}

