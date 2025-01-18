import authApihandler from "./src/controllers/auth/apiHandler.js"
import studentapihandler from "./src/controllers/manageStudent/apiHandler.js"
export const router = (app) =>{
    app.use('/api/auth',authApihandler);
    app.use('/api/students',studentapihandler);
};