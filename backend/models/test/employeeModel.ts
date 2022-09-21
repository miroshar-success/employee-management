import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "employee",
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
  },
  joingDate: {
    type: Date,
    default: Date.now,
  },
  currentProjects: {
    projectName: {
      type: String,
      required: true,
    },
    responsiblity: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  professionalInfo: {
    bonus: {
      type: Number,
      required: true,
    },
    totalLeave: {
      type: Number,
      required: true,
    },
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
