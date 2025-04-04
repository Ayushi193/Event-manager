import { Router } from "express";
import { verifyJwt, verifyJwtAdmin } from "../midllewares/auth.middleware.js";
import { createsolutions, getProblems, getSolbyUserId, getsolutions, problemstatement } from "../controllers/problem.controller.js";

const router=Router()

router.route("").post(verifyJwtAdmin,problemstatement)
router.route("/getproblems").post(getProblems)
router.route("/solutions").post(verifyJwt,createsolutions)
router.route("/getsolutions").post(getsolutions)
router.route("/getsolutionbyid").post(getSolbyUserId)



export default router