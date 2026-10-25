import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Name should be more than 2 characters"],
      trim: true,
    },
    email: {
      type: String,
      unique: [true, "Email already in use!"],
      required: [true, "Email is required"],
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email"],
      lowercase: true,
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [16, "Age should be at least 16"],
      max: [100, "Maxiumum age is 100"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
