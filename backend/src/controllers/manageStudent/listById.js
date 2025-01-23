import { Router } from "express";
import studentModel from "../../models/studentModel.js";
import { STATE } from "../../config/constant.js";
import { RESPONSE } from "../../config/global.js";
import { setErrMsg, send } from "../../helper/responseHelper.js";
import { authenticate } from "../../middleware/authenticate.js";

const router = Router();
// router.get("/:student_id?", authenticate, async (req, res) => {
router.get("/", authenticate, async (req, res) => {
  try {
    // const student_id = req.params.student_id;
    // console.log(student_id);
    const student_id = req.query.student_id;

    if (!student_id || student_id == undefined) {
      return send(res, setErrMsg(RESPONSE.required, "student_id"));
    }
    
    let studentData = await studentModel.findOne({
      isactive: STATE.ACTIVE,
      _id: student_id,
    });
    // let studentData = await studentModel.aggregate([
    //   {
    //     $match: {
    //     //   teacher_id: req.user.id,
    //     $expr: {
    //         $eq: ["$teacher_id", {$toObjectId:req.user.id}]
    //     },
    //       isactive: STATE.ACTIVE,
    //     },
    //   },
    // ]);

    if (!studentData) {
      return send(res, setErrMsg(RESPONSE.not_found, "student Data"));
    }
    return send(res, RESPONSE.SUCCESS, studentData);
  } catch (error) {
    console.log("list Student:", error);
    return send(res, RESPONSE.unknwn_err);
  }
});

export default router;
