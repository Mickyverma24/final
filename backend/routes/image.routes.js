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

const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const check = multer({ storage: storage2 });

router.post("/savequizinfo", upload.single("file"), evaluateUser);

router.post("/check", check.single("image"), (req, res) => {
  console.log(req.image);
  console.log("check");
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  // Do something with the uploaded file, for example, save it to database, etc.
  console.log("File uploaded:", req.file);
  res.send("File uploaded successfully.");
});

export default router;
