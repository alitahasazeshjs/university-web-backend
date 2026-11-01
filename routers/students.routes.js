import express from "express";
import {
  createStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent
} from "../controllers/students.controllers.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/:id", getStudent);
router.get('/', getStudents);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);
export default router;