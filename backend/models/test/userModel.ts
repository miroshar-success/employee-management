import mongoose from "mongoose";
//import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
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
  },
  {
    timestamps: true,
  }
);

// userSchema.methods.getJWT = function () {
//   const token = jwt.sign(
//     { _id: this.id, name: this.email, role: this.role },
//     process.env.JWT_KEY as string,
//     { expiresIn: "2h" }
//   );
//   return token;
// };

const User = mongoose.model("User", userSchema);

export default User;
