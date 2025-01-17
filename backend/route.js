import authApihandler from "./src/controllers/auth/apiHandler.js"
export const router = (app) =>{
    app.use('/api/auth',authApihandler)
};