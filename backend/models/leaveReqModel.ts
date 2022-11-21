import mongoose from "mongoose";

const leaveReqSchema = new mongoose.Schema({
  leaveRequestDate: {
    type: Array,
  },
  leaveType: {
    type: String,
  },
  leaveReason: {
    type: String,
  },
  leaveStatus: {
    type: String,
  },
  empolyee: {
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
