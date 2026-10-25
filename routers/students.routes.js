import express from "express";
import {
  createStudent,
  getStudent,
} from "../controllers/students.controllers.js";

const router = express.Router();

router.post("/newStudent", createStudent);
router.get("/student/:id", getStudent);
export default router;