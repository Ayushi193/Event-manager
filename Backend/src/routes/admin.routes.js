import { Router } from "express";
import { loginAdmin, logOutAdmin, registerAdmin } from "../controllers/admin.controllers.js";
import { verifyJwt, verifyJwtAdmin } from "../midllewares/auth.middleware.js";


const router=Router()


router.route("/register").post(registerAdmin)
router.route("/login").post(loginAdmin)
router.route("/logout").post(verifyJwtAdmin,logOutAdmin)


export default router