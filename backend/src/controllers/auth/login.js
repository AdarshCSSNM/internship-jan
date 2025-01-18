import { Router } from "express";
import bcrypt from "bcrypt";
import teacherModel from "../../models/teacherModel.js";
import { STATE } from "../../config/constant.js";
import { RESPONSE } from "../../config/global.js";
import { setErrMsg, send } from "../../helper/responseHelper.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || username == undefined) {
      return send(res, setErrMsg(RESPONSE.required, "name"));
    }

    if (!password || password == undefined) {
      return send(res, setErrMsg(RESPONSE.required, "password"));
    }

    let userData = await teacherModel.findOne({
      $or: [{ phone: username }, { email:username }],
      isactive: STATE.ACTIVE,
    });

    if (userData && (await bcrypt.compare(password,userData.password))) {
      let token = jwt.sign(
        {
          id: userData._id,
          name: userData.name,
          phone: userData.phone,
          email: userData.email,
        },
        process.env.secretkey
      );

      return send(res, RESPONSE.SUCCESS, token);
    } else {
      return send(res, setErrMsg(RESPONSE.invalid, "login credential"));
    }
  } catch (error) {
    console.log("login:", error);
    return send(res, RESPONSE.unknwn_err);
  }
});

export default router;

 