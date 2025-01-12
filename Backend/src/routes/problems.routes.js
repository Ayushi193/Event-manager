import { Router } from "express";
import { verifyJwtAdmin } from "../midllewares/auth.middleware.js";
import { getProblems, problemstatement } from "../controllers/problem.controller.js";

const router=Router()

router.route("").post(verifyJwtAdmin,problemstatement)
router.route("/getproblems").get(getProblems)



export default router