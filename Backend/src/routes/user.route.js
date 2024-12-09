import { Router } from "express";
import { logOutuser, loginUser, registerUser,getUserChannelProfile } from "../controllers/user.controller.js";
import { upload } from "../midllewares/multer.middleware.js";
import { verifyJwt } from "../midllewares/auth.middleware.js";


const router=Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
       
    ]),
    registerUser)

 router.route("/login").post(loginUser)   

 router.route("/logout").post(verifyJwt,logOutuser)
 router.route("/filter").post(verifyJwt,getUserChannelProfile)

export default router