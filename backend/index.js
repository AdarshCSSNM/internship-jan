import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/helper/dbConnection.js";
dotenv.config();
const app= express();

const port=process.env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
connectDB();


app.listen(port, ()=>{
    console.log("server listening on port:", port);
})
