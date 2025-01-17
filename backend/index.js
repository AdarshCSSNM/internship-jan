import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/helper/dbConnection.js";
import { router } from "./route.js";
// import router from "./src/controllers/auth/apiHandler.js";
dotenv.config();
const app= express();

const port=process.env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
connectDB();
router(app);


app.listen(port, ()=>{
    console.log("server listening on port:", port);
})

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>test</title>
        </head>
        <body>
            <h3>ffff</h3>
        </body>
        </html>
    `);
});





