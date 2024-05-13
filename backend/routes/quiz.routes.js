import express from "express";
import { newQuiz } from "../controllers/quizControllers/newQuiz.js";

const router = express.Router();

router.post("/newquiz",newQuiz);


export default router;
