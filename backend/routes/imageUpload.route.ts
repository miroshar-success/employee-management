import express from "express";
import multer from "multer";
import path from "path";
import { Request, Response } from "express";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), (req: any, res: Response) => {
  const imgUrl = req.file.path.replace(/\\/g, "/");
  console.log(imgUrl);
  res.send(`/${imgUrl}`);
});

export default router;
