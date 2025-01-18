import { Router } from "express";
import bcrypt from "bcrypt";
import teacherModel from "../../models/teacherModel.js";
import { STATE } from "../../config/constant.js";
import { RESPONSE } from "../../config/global.js";
import { setErrMsg,send } from "../../helper/responseHelper.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    console.log(name, phone, email, password);
    if (!name || name == undefined) {
        return send(res,setErrMsg(RESPONSE.required,"name"));
    }
    if (!phone || phone == undefined) {
        return send(res,setErrMsg(RESPONSE.required,"phone"));

    }
    if (!email || email == undefined) {
        return send(res,setErrMsg(RESPONSE.required,"email"));

    }
    if (!password || password == undefined) {
        return send(res,setErrMsg(RESPONSE.required,"password"));

    }

    let encryptedPassword = await bcrypt.hash(
      password,
      Number(process.env.HASHROUND)
    );
    console.log(encryptedPassword);

    const isphone = phone
      .toString()
      .match(
        /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
      );
    console.log(isphone);

    const isemail = email
      .toString()
      .match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/);
    console.log(isemail);
    if (!isphone) {
        return send(res,setErrMsg(RESPONSE.invalid,"phone"));;
    }

    if (!isemail) {
        return send(res,setErrMsg(RESPONSE.invalid,"email"));;;
    }

    let isPhoneExists = await teacherModel.findOne({
      phone,
      isactive: STATE.ACTIVE,
    });

    console.log(isPhoneExists);

    if (isPhoneExists) {
        return send(res,setErrMsg(RESPONSE.already_exist,"phone"));;;
    }

    let isEmailExists = await teacherModel.findOne({
        email,
        isactive: STATE.ACTIVE,
      });
    if (isEmailExists) {
        return send(res,setErrMsg(RESPONSE.already_exist,"email"));;;
    }

    await teacherModel.create({
      name,
      phone,
      email,
      password: encryptedPassword,
    });

    return send(res,RESPONSE.SUCCESS);
  } catch (error) {
    console.log("Register", error);
    return send(res,RESPONSE.unknwn_err);
  }
});

export default router;
