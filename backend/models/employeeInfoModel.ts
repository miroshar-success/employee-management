import mongoose from "mongoose";

const employeeInfoSchema = new mongoose.Schema(
  {
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
      recentLeave: {
        type: Array,
      },
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeInfo = mongoose.model("Employee", employeeInfoSchema);

export default EmployeeInfo;
