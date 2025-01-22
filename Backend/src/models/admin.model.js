import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const AdminSchema=new Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
     },
     fullName:{
        type:String,
        required:true,
        trim:true,
        index:true,  
     },
     password:{
        type:String,
        required:true
    },
    college:{
        required:true,
        type:String
    }
},
{
    timestamps:true
}

)


AdminSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10)
    next()

})

AdminSchema.methods.isPasswordCorrect=async function (password){
    return await bcrypt.compare(password,this.password)
}


AdminSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

AdminSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const Admin= mongoose.model("Admin",AdminSchema)