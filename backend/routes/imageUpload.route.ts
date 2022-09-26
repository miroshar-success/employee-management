import express from "express";
import multer from "multer";
import { Request, Response } from "express";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), (req: any, res: Response) => {
  res.send(`/${req.file.path}`);
});

export default router;
