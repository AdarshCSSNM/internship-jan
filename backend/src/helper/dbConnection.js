import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: process.env.DB_NAME,
    })
       
    .then(() => console.log('Connected!'))
    .catch((err) => {
      console.log("Failed to connect DB", err.message);
    });
};
