import { set } from "mongoose";
import { RESPONSE } from "../config/global.js";
import { send } from "../helper/responseHelper.js";
import jwt from "jsonwebtoken";
export const authenticate = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return send(res, RESPONSE.access_denied);   
    }
    try{
        const decoded = jwt.verify(token, process.env.secretkey);
        req.user = decoded;
        return next();
    }catch(error){
        return send(res, setErrMsg(Response.invalid,"token"));
    }
};