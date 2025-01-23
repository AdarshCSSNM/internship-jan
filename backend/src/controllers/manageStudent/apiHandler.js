import { Router } from "express";
const router = Router()
import addStudent from "./addStudent.js"
import listStudent from "./listStudent.js"
import listbyid from "./listById.js"
// import login from "./login.js"
router.use("/add",addStudent);
router.use("/list",listStudent);
router.use("/listbyid",listbyid);
// router.use("/register",register);
// router.use("/login",login)

export default router;