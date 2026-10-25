import Student from "../models/student.model.js";

export const createStudent = async (req, res, next) => {
  try {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const department = req.body.department;

    const newStudent = new Student({
      name,
      email,
      age,
      department,
    });

    await newStudent.save();

    res.status(201).json({
      message: "New Student Created",
      student: newStudent,
    });
  } catch (error) {
    next(error)
  }
};

export const getStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({
        message: "Student Not found!",
      });
    }
    res.status(200).json({ student });
  } catch (error) {
    console.log(error.message)  
    res.status(500).json({ message: "Internal server error getStudent", error: error.message });
  }
};