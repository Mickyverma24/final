import express from "express";
import { protectedUser } from "../middlewares/protectedUser.js";
import evaluateUser from "../utils/evaluateUser.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/savequizinfo", upload.single("file"), evaluateUser);
export default router;
