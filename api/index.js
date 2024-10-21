import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MANGO)
  .then(() => {
    console.log("connnected to db");
  })
  .catch((err) => {
    console.log("not connected");
  });
const app = express();

app.listen(3000, () => {
  console.log("server is runnnig on port 3000!!!!!1");
});
