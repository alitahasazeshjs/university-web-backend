import express from "express";
import { connectDB } from "./db/db.js";
import studentRouter from "./routers/students.routes.js";

const app = express();
connectDB();

app.use(express.json());



app.use("/api/students", studentRouter)

app.use((error, req, res,next) => {

  if(res.headersSent) {
    return next(error);
  }

   if(error.name === "ValidationError") {
      const errors = Object.values(error.errors).map(item => item.message);

      return res.status(400).json({
        message: "Validation Error!",
        errors
      })
    }

    res.status(500).json ({
      message: "Internal Server Error! from middleware",
      error: error.message,
    });
});

app.use((error, req,res,next) => {
  console.log("Second error handler!")
})

app.listen(5000, () => {
  console.log("Running on port 5000");
});