import express from "express";
import multer from "multer";
import path from "path";
import { Response } from "express";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "noticeFileUploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req: any, res: Response) => {
  const fileUrl = req.file.path.replace(/\\/g, "/");
  res.send(`/${fileUrl}`);
});

export default router;
