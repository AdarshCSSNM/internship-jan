import { Router } from "express";
import studentModel from "../../models/studentModel.js";
import { STATE } from "../../config/constant.js";
import { RESPONSE } from "../../config/global.js";
import { setErrMsg,send } from "../../helper/responseHelper.js";
import { authenticate } from "../../middleware/authenticate.js";

const router = Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const { name, phone, rollno } = req.body;

    const teacher_id = req.user.id;

    // console.log(req.user);
    if (!name || name == undefined) {
        return send(res,setErrMsg(RESPONSE.required,"name"));
    }
    if (!phone || phone == undefined) {
        return send(res,setErrMsg(RESPONSE.required,"phone"));

    }
    if (!rollno || rollno == undefined) {
        return send(res,setErrMsg(RESPONSE.required,"email"));

    }

    // let encryptedPassword = await bcrypt.hash(
    //   password,
    //   Number(process.env.HASHROUND)
    // );
    // console.log(encryptedPassword);

    const isphone = phone
      .toString()
      .match(
        /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
      );
    console.log(isphone);

    let isPhoneExists = await studentModel.findOne({
      phone,
      isactive: STATE.ACTIVE,
    });

    console.log(isPhoneExists);

    if (isPhoneExists) {
        return send(res,setErrMsg(RESPONSE.already_exist,"phone"));;;
    }

    let isRollnoExists = await studentModel.findOne({
        rollno,
        isactive: STATE.ACTIVE,
      });
    if (isRollnoExists) {
        return send(res,setErrMsg(RESPONSE.already_exist,"rollno"));;;
    }
    await studentModel.create(
        {
      name,
      phone,
      rollno,
      teacher_id,
    }

);

    return send(res,RESPONSE.SUCCESS);
  } catch (error) {
    console.log("Add Student:", error);
    return send(res,RESPONSE.unknwn_err);
  }
});

export default router;
