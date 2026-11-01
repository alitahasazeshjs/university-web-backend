import Student from "../models/student.model.js";

export const createStudent = async (req, res, next) => {
  try {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const department = req.body.department;
    
    if (!name || !age || !email || !department) {
      return res.status(400).json({
        message: "All fields are required!",
      });
    }

    if(typeof age !== 'number') {
       return res.status(400).json({
        success: false,
        message: 'Age should be a number!'
      })
    }

    if(typeof department !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Department should be a string!'
      })
    }

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
    next(error);
  }
};

export const getStudent = async (req, res, next) => {
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
    res.status(500).json({
      message: "Internal server error getStudent",
      error: error.message,
    });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    if (!students) {
      return res
        .status(200)
        .json({ success: true, message: "No Students", students: [] });
    }

    res
      .status(200)
      .json({ message: "Students retrieved successfully!", students });
  } catch (error) {
    next(error);
  }
};

export const updateStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const department = req.body.department;

    
    
    const updatedData = {};
    if(name !== undefined) updatedData.name = name;
    if(age !== undefined) updatedData.age = age;
    if(email !== undefined) updatedData.email = email;
    if(department !== undefined) updatedData.department = department;
    
    
    
    if(Object.keys(updatedData).length === 0) {
      return res.status(400).json({message: "Change is required!"})
    }

    if(age && typeof age !== 'number') {
       return res.status(400).json({
        success: false,
        message: 'age should be a number!'
      })
    }

    if(department && typeof department !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Department should be a string!'
      })
    }

    const student = await Student.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,  
    });

    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found!" });
    }

    res.status(200).json({
      message: "Student Updated successfully",
      student
    })
  } catch (error) {
    next(error);
  }
};

export const deleteStudent = async (req,res,next) => {
  try {
    const {id} = req.params;
    const student = await Student.findByIdAndDelete(id);
    if(!student) {
      return res.status(400).json({
        message: "No Student Found!"
      })
    }
    res.status(200).json({
      message: "Student Deleted Successfully!"
    })
  } catch(error) {
    next(error);
  }
}