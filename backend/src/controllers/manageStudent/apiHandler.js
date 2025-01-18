import { Router } from "express";
const router = Router()
import addStudent from "./addStudent.js"
// import login from "./login.js"
router.use("/add",addStudent);
// router.use("/register",register);
// router.use("/login",login)

export default router;