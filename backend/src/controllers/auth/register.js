import { Router } from "express";
import bcrypt from "bcrypt";
import teacherModel from "../../models/teacherModel.js";

const router = Router();



router.post("/", async (req, res) => {
    try{
       const {name, phone, email, password} = req.body;
       console.log(name,phone,email,password);
       if(!name || name == undefined){
        res.send({
            message:"name is required",
        })
       }
       if(!phone || phone == undefined){
        res.send({
            message:"phone is required",
        })
       }
       if(!email || email == undefined){
        res.send({
            message:"email is required",
        })
       }
       if(!password || password == undefined){
        res.send({
            message:"password is required",
        })
       }

       let encryptedPassword =await bcrypt.hash(password, Number(process.env.HASHROUND));
      console.log(encryptedPassword)

      await teacherModel.create({
        name,
        phone,
        email,
        password: encryptedPassword,
      });

       const isphone = phone.toString().match(/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/)
       console.log(isphone);

       const isemail =email.toString().match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/)
       console.log(isemail)
       if (!isphone){
        return res.send({
            message:"invalid phone number",
           });
       }

       if (!isemail){
        return res.send({
            message:"invalid email",
           });
       }

       res.send({
        message:"success",
       });
    } catch (error) {
        console.log("Register", error);
        res.send({
            message:"something went wrong!",
           });
    }
    

});

export default router;