import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  noticeTitle: {
    type: String,
    required: true,
  },
  noticeBody: {
    type: String,
  },
  noticeDate: {
    type: Date,
    default: Date.now,
  },
  noticeFile: {
    type: String,
  },
});

const Notice = mongoose.model("Notice", noticeSchema);
export default Notice;
