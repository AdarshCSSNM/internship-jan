import { Router } from "express";
import studentModel from "../../models/studentModel.js";
import { STATE } from "../../config/constant.js";
import { RESPONSE } from "../../config/global.js";
import { setErrMsg, send } from "../../helper/responseHelper.js";
import { authenticate } from "../../middleware/authenticate.js";


const router = Router();

router.get("/", authenticate, async (req, res) => {
  try {
    // let studentData = await studentModel.find({
    //   isactive: STATE.ACTIVE,
    // })
    let studentData = await studentModel.aggregate([
      {
        $match: {
        //   teacher_id: req.user.id,
        $expr: {
            $eq: ["$teacher_id", {$toObjectId:req.user.id}]
        },
          isactive: STATE.ACTIVE,
        },
      },
    ]);

    if(studentData.length == 0){
      return send(res, setErrMsg(RESPONSE.not_found, studentData));
    }
    return send(res, RESPONSE.SUCCESS, studentData);
  } catch (error) {
    console.log("list Student:", error);
    return send(res, RESPONSE.unknwn_err);
  }
});

export default router;
