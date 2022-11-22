import mongoose from "mongoose";

const leaveReqSchema = new mongoose.Schema({
  leaveRequestDate: {
    type: Array,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
  },
  leaveReason: {
    type: String,
  },
  leaveStatus: {
    type: String,
    required: true,
    default: "Pending",
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  resolvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
});

const LeaveReq = mongoose.model("LeaveReq", leaveReqSchema);
export default LeaveReq;
